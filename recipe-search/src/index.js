import "./css/style.css";

import axios from "axios";
import "./customElement/cardItem";
import "./customElement/RecipDetail";
const searchBtn = document.getElementById("search-btn");
const clsBtn = document.getElementById("cls-btn");
const detailModalHtml = document.querySelector(".detail-modal");
const detailResep = document.querySelector(".detail-resep");
const listMakanan = document.getElementById("list-makanan");

const getData = () => {
    const searchInput = document
        .getElementById("food-search-input")
        .value.trim();
    axios
        .get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
        )
        .then((data) => {
            data = data.data;

            if (data.meals) {
                let element = "";
                data.meals.forEach((meal) => {
                    element += `
                    <card-item idMeal=${meal.idMeal} name=${meal.strMeal} thumbnail=${meal.strMealThumb} country=${meal.strArea} category=${meal.strCategory} ></card-item>
                    `;
                });

                listMakanan.innerHTML = element;
            } else {
                listMakanan.innerHTML = `<h1 class="text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Sorry resep yang diminta tidak ditemukan</h1>`;
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

const getResep = (e) => {
    e.preventDefault();

    if (e.target.parentElement.classList.contains("detail-btn")) {
        let itemId =
            e.target.parentElement.parentElement.parentElement.parentElement;

        axios
            .get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId.dataset.id}`
            )
            .then((response) => {
                detailModal(response.data.meals);
            });
    } else {
        console.log("Error");
    }
};

// modal
const detailModal = (makanan) => {
    makanan = makanan[0];

    let elementHtml = `
    <recipe-detail name="${makanan.strMeal}" category=" ${makanan.strCategory}" country="${makanan.strArea}" instruction="${makanan.strInstructions}" thumbnail="${makanan.strMealThumb}" link="${makanan.strYoutube}" nameLink="${makanan.strMeal}"></recipe-detail>
    `;

    detailModalHtml.classList.remove("hidden");

    detailResep.innerHTML = elementHtml;
};
//modal event listener
listMakanan.addEventListener("click", getResep);
//search event
searchBtn.addEventListener("click", getData);
// close event
clsBtn.addEventListener("click", () => {
    detailModalHtml.classList.add("hidden");
});
