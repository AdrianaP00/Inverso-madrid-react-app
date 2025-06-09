import React, { useEffect, useState } from "react";
import { MenuItem, SubHeading } from "../../components";
import "./SpecialMenu.css";
import getMenuSections from "../../constants/menu-data";

const SpecialMenu = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuData = await getMenuSections();
        setData(menuData);
      } catch (err) {
        setError("Error loading menu data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return <div className="app__specialMenu-loading">Cargando menú...</div>;
  if (error) return <div className="app__specialMenu-error">{error}</div>;

  // Section-specific rendering for design consistency
  return (
    <div className="app__specialMenu flex__center" id="carta">
      <div className="app__specialMenu-title">
        <SubHeading />
        <h1 className="headtext__cormorant">Nuestra carta</h1>
      </div>

      {/* Cocktails & Caprichos */}
      <div className="app__specialMenu-menu" id="cocktail">
        <div className="app__specialMenu-menu_cocktails  flex__start" id="cocktail">
          <p className="app__specialMenu-menu_heading_titles">COCKTAILS</p>
          <p className="app__specialMenu-menu_heading">
            {data.cocktails?.[0]?.menu_section?.Title}
          </p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails?.map((cocktail, index) => (
              <MenuItem
                key={cocktail.Name + index}
                name={cocktail.Name}
                price={cocktail.price}
                img={cocktail.Image?.formats?.small?.url}
                description={cocktail.Description}
                ingredients={cocktail.Ingredients}
                allergenics={cocktail.alergenics}
              />
            ))}
          </div>
          <p className="app__specialMenu-menu_heading_medium">
            ’TE APETECE ALGO DIFERENTE ?! PREGUNTAS POR NUESTROS COCKTAILS SIN ALCOHOL y POR LOS CLÁSICOS.’.
          </p>
        </div>
        {data.caprichos && (
          <div className="app__specialMenu-menu_wine flex__center" id="caprichos">
            <p className="app__specialMenu-menu_heading_titles">Caprichos</p>
            <p className="app__specialMenu-menu_heading">
              {data.caprichos[0]?.menu_section?.Title}
            </p>
            <div className="app__specialMenu_menu_items">
              {data.caprichos.map((capricho, index) => (
                <MenuItem
                  key={capricho.Name + index}
                  name={capricho.Name}
                  description={capricho.Description}
                  img={capricho.Image?.formats?.small?.url}
                  price={capricho.price}
                  ingredients={capricho.Ingredients}
                  allergenics={capricho.alergenics}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Montanare & Tapas & Dolci */}
      <div className="app__specialMenu-menu">
        {data.montanare && (
          <div className="app__specialMenu-menu_wine  flex__center" id="montanare">
            <p className="app__specialMenu-menu_heading_titles">
              {data.montanare[0]?.menu_section?.Title}
            </p>
            <div className="app__specialMenu_menu_items">
              {data.montanare.map((montanara, index) => (
                <MenuItem
                  key={montanara.Name + index}
                  name={montanara.Name}
                  description={montanara.Description}
                  img={montanara.Image?.formats?.small?.url}
                  price={montanara.price}
                  ingredients={montanara.Ingredients}
                  allergenics={montanara.alergenics}
                />
              ))}
            </div>
          </div>
        )}
        {data.tapas && (
          <div className="app__specialMenu-menu_cocktails  flex__center" id="tapa">
            <p className="app__specialMenu-menu_heading_titles">
              {data.tapas[0]?.menu_section?.Title}
            </p>
            <div className="app__specialMenu_menu_items">
              {data.tapas.map((tapa, index) => (
                <MenuItem
                  key={tapa.Name + index}
                  name={tapa.Name}
                  description={tapa.Description}
                  img={tapa.Image?.formats?.small?.url}
                  price={tapa.price}
                  ingredients={tapa.Ingredients}
                  allergenics={tapa.alergenics}
                />
              ))}
            </div>
          </div>
        )}
        {data.dolci && (
          <div className="app__specialMenu-menu_wine  flex__center" id="dolce">
            <p className="app__specialMenu-menu_heading_titles">
              {data.dolci[0]?.menu_section?.Title}
            </p>
            <div className="app__specialMenu_menu_items">
              {data.dolci.map((dolce, index) => (
                <MenuItem
                  key={dolce.Name + index}
                  name={dolce.Name}
                  description={dolce.Description}
                  img={dolce.Image?.formats?.small?.url}
                  price={dolce.price}
                  ingredients={dolce.Ingredients}
                  allergenics={dolce.alergenics}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bebidas & VinosBlancos */}
      <div className="app__specialMenu-menu">
        {data.bebidas && (
          <div className="app__specialMenu-menu_cocktails  flex__center" id="bebidas">
            <p className="app__specialMenu-menu_heading_titles">
              {data.bebidas[0]?.menu_section?.Title}
            </p>
            <div className="app__specialMenu_menu_items">
              {data.bebidas.map((bebida, index) => (
                <MenuItem
                  key={bebida.Name + index}
                  name={bebida.Name}
                  price={bebida.price}
                  description={bebida.Description}
                  allergenics={bebida.alergenics}
                />
              ))}
            </div>
          </div>
        )}
        {data.vinosBlancos && (
          <div className="app__specialMenu-menu_wine  flex__center" id="VinosBlancos">
            <p className="app__specialMenu-menu_heading_titles">Vinos</p>
            <div className="app__specialMenu_menu_items">
              {data.vinosBlancos.map((vino, index) => (
                <MenuItem
                  key={vino.Name + index}
                  name={vino.Name}
                  price={vino.price}
                  description={vino.Description}
                  allergenics={vino.alergenics}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* VinosRosado & VinosTintos */}
      <div className="app__specialMenu-menu">
        {data.vinosRosado && (
          <div className="app__specialMenu-menu_cocktails  flex__center" id="VinosRosado">
            <div className="app__specialMenu_menu_items">
              {data.vinosRosado.map((vinoRosado, index) => (
                <MenuItem
                  key={vinoRosado.Name + index}
                  name={vinoRosado.Name}
                  price={vinoRosado.price}
                  description={vinoRosado.Description}
                  allergenics={vinoRosado.alergenics}
                />
              ))}
            </div>
          </div>
        )}
        {data.vinosTintos && (
          <div className="app__specialMenu-menu_wine  flex__center" id="VinosTintos">
            <div className="app__specialMenu_menu_items">
              {data.vinosTintos.map((vinosTintos, index) => (
                <MenuItem
                  key={vinosTintos.Name + index}
                  name={vinosTintos.Name}
                  price={vinosTintos.price}
                  description={vinosTintos.Description}
                  allergenics={vinosTintos.alergenics}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Prosecco */}
      <div className="app__specialMenu-menu">
        {data.prosecco && (
          <div className="app__specialMenu-menu_cocktails  flex__center" id="Prosecco">
            <p className="app__specialMenu-menu_heading_titles">
              {data.prosecco[0]?.menu_section?.Title}
            </p>
            <div className="app__specialMenu_menu_items">
              {data.prosecco.map((prosecco, index) => (
                <MenuItem
                  key={prosecco.Name + index}
                  name={prosecco.Name}
                  price={prosecco.price}
                  description={prosecco.Description}
                  allergenics={prosecco.alergenics}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialMenu;
