import React, { Component } from "react";

export default class ChooseGlasses extends Component {
  state = {
    imgGlasses: "./img/glassesImage/v7.png",
    price: "$30",
    nameProduct: "FENDI F8750",
  };

  handleChooseGlasses = (imgGlasses, price, nameProduct) => {
    this.setState({
      imgGlasses,
      price,
      nameProduct,
    });
  };

  render() {
    return (
      <div>
        <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
          <h2 className="text-center h2 text-white py-1">Glasses App</h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="container row">
              <section className="model d-flex justify-content-center col-5">
                <div
                  className="card text-left"
                  style={{ width: 300, position: "relative" }}
                >
                  <img
                    className="card-img-top"
                    src="./img/glassesImage/model.jpg"
                    alt="hinh model"
                  />
                  <img
                    src={this.state.imgGlasses}
                    alt="kinh"
                    style={{
                      width: 170,
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "16%",
                    }}
                  />
                  <div className="card-body">
                    <span className="card-title badge-danger h3 px-2 rounded">
                      {this.state.price}
                    </span>
                    <p className="card-text mt-2">{this.state.nameProduct}</p>
                  </div>
                </div>
              </section>
              <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      this.handleChooseGlasses(
                        "./img/glassesImage/v1.png",
                        "$30",
                        "GUCCI G8850U"
                      )
                    }
                  >
                    <img
                      src="./img/glassesImage/v1.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      this.handleChooseGlasses(
                        "./img/glassesImage/v2.png",
                        "$50",
                        "GUCCI G8759H"
                      )
                    }
                  >
                    <img
                      src="./img/glassesImage/v2.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      this.handleChooseGlasses(
                        "./img/glassesImage/v3.png",
                        "$30",
                        "DIOR D6700HQ"
                      )
                    }
                  >
                    <img
                      src="./img/glassesImage/v3.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      this.handleChooseGlasses(
                        "./img/glassesImage/v4.png",
                        "$30",
                        "DIOR D6005U"
                      )
                    }
                  >
                    <img
                      src="./img/glassesImage/v4.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      this.handleChooseGlasses(
                        "./img/glassesImage/v5.png",
                        "$30",
                        "PRADA P8750"
                      )
                    }
                  >
                    <img
                      src="./img/glassesImage/v5.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      this.handleChooseGlasses(
                        "./img/glassesImage/v6.png",
                        "$30",
                        "PRADA P9700"
                      )
                    }
                  >
                    <img
                      src="./img/glassesImage/v6.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      this.handleChooseGlasses(
                        "./img/glassesImage/v7.png",
                        "$30",
                        "FENDI F8750"
                      )
                    }
                  >
                    <img
                      src="./img/glassesImage/v7.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      this.handleChooseGlasses(
                        "./img/glassesImage/v8.png",
                        "$30",
                        "FENDI F8500"
                      )
                    }
                  >
                    <img
                      src="./img/glassesImage/v8.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      this.handleChooseGlasses(
                        "./img/glassesImage/v9.png",
                        "$30",
                        "FENDI F4300"
                      )
                    }
                  >
                    <img
                      src="./img/glassesImage/v9.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
