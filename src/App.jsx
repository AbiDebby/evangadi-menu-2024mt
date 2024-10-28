import "./App.css";
import Menu from "./Component/FoodItem/Menu";
import { menuData } from "./assets/menuData";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      {/* *********************componenet replication method************** */}

      {/* <div className="all-container">
        <header className="title">
          <h1>Evangadi Menu</h1>
          <div></div>
        </header>
        <div className="foods-container">
          <Menu
            image="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp"
            food="TIMATIM SELAXA (ቲማቲም ሰላጣ)"
            price={5.99}
            description="Timatim Salata refers to a type of fresh Ethiopian tomato salad
            that’s also popular in Eritrea. It’s made with diced tomatoes,
            minced onions, and finely chopped peppers dressed with a mixture of
            berbere spices, olive oil, vinegar, and lemon juice."
          />
          <Menu
            image="https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280"
            food="TIBS (ጥብስ)"
            price={22.99}
            description=" Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs is
            one of the most popular dishes among Ethiopians. It comes in a
            variety of forms, varying in type, size or shape of the cuts of meat
            used, and can range from hot to mild or contain..."
          />

          <Menu
            image="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo.jpg.webp"
            food="KITFO (ክትፎ)"
            price={25.99}
            description=" Made from the leanest meat, kitfo is viewed as a big treat by
            ordinary Ethiopians, while its nutritional powers are also praised.
            Similar to French steak tartare, the meat is minced and warmed in a
            pan with a little butter, mitmita (a stronger version of berbere)..."
            
          />
        </div>
      </div> */}

      {/* ****************array  map method********************  */}

      {/* <div className="all-container">
        <header className="title">
          <h1>Evangadi Menu</h1>
          <div></div>
        </header>
        <div className="foods-container">
          {menuData.map((obj, i) => {
            return (
              <Menu
                key={i} //array-index
                food={obj.title}
                image={obj.img}
                price={obj.price}
                description={obj.desc}
              />
            );
          })}
        </div>
      </div> */}

      {/* ***************destructuring method************** */}
      <div className="all-container">
        <header className="title">
          <h1>Evangadi Menu</h1>
          <div></div>
        </header>
        <div className="foods-container">
          {menuData.map(({ title, img, price, desc }, i) => {
            return (
              <Menu
                key={i} //array-index
                food={title}
                image={img}
                price={price}
                description={desc}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
