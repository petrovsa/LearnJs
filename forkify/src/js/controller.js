import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import viewRecipe from "./views/viewRecipe.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecepies = async function () {
  try {
    viewRecipe.renderSpiner();
    const { recipe } = model.state;
    const id = window.location.hash.slice(1);
    if (!id) return;
    await model.loadRecipe(id);

    viewRecipe.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, controlRecepies)
);
