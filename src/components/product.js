import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

import slider1 from '../images/slider1.png'
import slider2 from '../images/images.jpg'
import slider3 from '../images/slider3.png'
import slider4 from '../images/slider4.png'
import slider5 from '../images/slider5.png'
import Side from "./sidenav";



function Product() {
  return (
    <div className="flex w-[100%]">
      <div className="relative w-[20%]">
        <Side />
      </div>
      <MDBContainer fluid className="my-5 text-center">


        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={slider1}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      {/* <h5>
                      <span className="badge bg-primary ms-2">New</span>
                    </h5> */}
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">$61.99</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={slider2}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-success ms-2">Eco</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">$61.99</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={slider3}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-danger ms-2">-10%</span>
                      </h5>
                    </div>
                  </div>
                  <div class="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">
                  <s>$61.99</s>
                  <strong className="ms-2 text-danger">$50.99</strong>
                </h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={slider4}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-success ms-2">Eco</span>
                        <span className="badge bg-danger ms-2">-10%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">
                  <s>$61.99</s>
                  <strong className="ms-2 text-danger">$50.99</strong>
                </h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={slider5}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div class="d-flex justify-content-start align-items-end h-100"></div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">$61.99</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={slider2}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div class="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">New</span>
                        <span className="badge bg-success ms-2">Eco</span>
                        <span className="badge bg-danger ms-2">-10%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">
                  <s>$61.99</s>
                  <strong className="ms-2 text-danger">$50.99</strong>
                </h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>

  );
}

export default Product;