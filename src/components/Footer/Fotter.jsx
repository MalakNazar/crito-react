import logo from '../../assets/images/logotype-white.svg'
import '../Footer/Footer.css'


function Fotter() {

   return (
      <>
         <section className="fotter p-0 m-0 dawnLitte"   >

            <div className="row p-0 m-0 "   >
               <div className=" col-lg-12 col-md-12 col-sm-12 m-0 p-0 ">
                  <footer className="bg-black p-0  m-0 text-center text-lg-start text-white">

                     <div className="container  bg-black ">

                        <div className="row ">

                           <div className="col-lg-3  col-md-6 mb-0 mb-md-0">

                              <div className="  logos shadow-1-strong d-flex align-items-center justify-content-center  mx-auto" style={{ width: "150px", height: "150px" }}>
                                 <img src={logo}></img>
                              </div>
                              <p className="text-center para1">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Quae dolores iusto voluptatibus deleniti autnihil sunt provident.
                                 Consectetur sint deserunt, sapiente unde rerum soluta,
                                 quo odio iusto, sit dolorem itaque.</p>
                           </div>
                           <div className="col-lg-2 col-md-6 mt-1">
                              <h5 className="text-uppercase mb-2 mt-5 company ">company</h5>

                              <ul className="list-unstyled  company company2">
                                 <li className="">
                                    <a href="#" className=" nav-link text-white">About</a>
                                 </li>
                                 <li className="">
                                    <a href="#!" className=" nav-link text-white">Features</a>
                                 </li>
                                 <li className="">
                                    <a href="#!" className=" nav-link text-white">Works</a>
                                 </li>
                                 <li className="">
                                    <a href="#!" className="nav-link text-white">Career</a>
                                 </li>
                              </ul>
                           </div>
                           <div className="col-lg-2 col-md-6 mt-1 ">
                              <h5 className="text-uppercase mt-5 help">Help</h5>

                              <ul className="list-unstyled company  help ">
                                 <li className="">
                                    <a href="#" className="nav-link text-white ">Customer Support</a>
                                 </li>
                                 <li className="">
                                    <a href="#!" className="nav-link text-white ">Delivery Details</a>
                                 </li>
                                 <li className="">
                                    <a href="#!" className="nav-link text-white  maggi-1 ">Terms & Conditions</a>
                                 </li>
                                 <li className="">
                                    <a href="#!" className="nav-link text-white ">Privacy Policy</a>
                                 </li>
                              </ul>
                           </div>

                           <div className="col-lg-2 col-md-6 mt-1 help1 ">
                              <h5 className="text-uppercase  mt-5">Resources</h5>

                              <ul className="list-unstyled ">
                                 <li className="">
                                    <a href="#" className="nav-link text-white ">Free eBooks</a>
                                 </li>
                                 <li className="">
                                    <a href="#!" className="nav-link text-white ">Development Tutorial</a>
                                 </li>
                                 <li className="">
                                    <a href="#!" className="nav-link text-white">How to - Blog</a>
                                 </li>
                                 <li className="">
                                    <a href="#!" className="nav-link text-white">Youtube Playlist</a>
                                 </li>
                              </ul>
                           </div>
                           <div className="col-lg-2 col-md-6 mt-1 ">
                              <h5 className="text-uppercase m mt-5 help1  ">Link</h5>

                              <ul className="list-unstyled help1 ">
                                 <li className="">
                                    <a href="#" className="nav-link text-white">Free eBooks</a>
                                 </li>
                                 <li className="">
                                    <a href="#!" className="nav-link text-white ">Development Tutorial</a>
                                 </li>
                                 <li className="">
                                    <a href="#!" className="nav-link text-white">How to - Blog</a>
                                 </li>
                                 <li className="">
                                    <a href="#!" className="nav-link text-white">Youtbe Playlist</a>
                                 </li>
                              </ul>
                           </div>


                        </div>
                     </div>
                     <hr className="under-footer1" />

                     <div className="under-footer">
                        <div className="row d-flex justify-content-center">
                           <div className="col-10 ">
                              <div className="row ">

                                 <div className='col-8 '>
                                    <div className="text-center  text45" style={{ backgroundColor: "" }}>
                                       © 2023 Crito - Consulting Company Inc. All Rights Reserved
                                    </div>
                                 </div>



                                 <div className=' col-3  '>

                                    <a href="#" className='iconat'>
                                       <svg fill="#ffff" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
                                       </svg></a>
                                    <a href="#" className='iconat'> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 15.969 12.969">
                                       <path id="_" data-name="" d="M14.344,3.75a6.952,6.952,0,0,0,1.625-1.687,6.151,6.151,0,0,1-1.875.5A3.206,3.206,0,0,0,15.531.75a6.93,6.93,0,0,1-2.062.813,3.294,3.294,0,0,0-5.688,2.25,3.082,3.082,0,0,0,.094.75A9.52,9.52,0,0,1,1.094,1.125,3.192,3.192,0,0,0,.656,2.781,3.228,3.228,0,0,0,2.125,5.5a3.459,3.459,0,0,1-1.5-.406v.031A3.285,3.285,0,0,0,3.25,8.344a3.663,3.663,0,0,1-.844.125,4.235,4.235,0,0,1-.625-.062,3.265,3.265,0,0,0,3.063,2.281A6.6,6.6,0,0,1,.781,12.094,6.078,6.078,0,0,1,0,12.031,9.142,9.142,0,0,0,5.031,13.5a9.231,9.231,0,0,0,9.313-9.312Z" transform="translate(0 -0.531)" fill="#ffff" />

                                    </svg></a>
                                    <a href="#" className='iconat'> <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#ffff" xmlns="http://www.w3.org/2000/svg">
                                       <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#ffff" />
                                       <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#ffff" />
                                       <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#ffff" />
                                    </svg></a>
                                    <a href="#" className='iconat'><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 14 14">
                                       <path id="_" data-name="" d="M13,0H.969A1.008,1.008,0,0,0,0,1.031V13a.981.981,0,0,0,.969,1H13a1.007,1.007,0,0,0,1-1V1.031A1.035,1.035,0,0,0,13,0ZM4.219,12H2.156V5.344H4.219ZM3.188,4.406A1.194,1.194,0,0,1,1.969,3.219a1.2,1.2,0,1,1,2.406,0A1.187,1.187,0,0,1,3.188,4.406ZM12,12H9.906V8.75C9.906,8,9.906,7,8.844,7c-1.094,0-1.25.844-1.25,1.719V12H5.531V5.344H7.5V6.25h.031A2.2,2.2,0,0,1,9.5,5.156c2.094,0,2.5,1.406,2.5,3.188Z" fill="#ffff" />
                                    </svg> </a>




                                 </div>





                              </div>
                           </div>
                        </div>
                     </div>

                  </footer>
               </div>
            </div>
         </section>




      </>
   )




}

export default Fotter;