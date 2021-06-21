import React,{useState} from"react";
import $ from "jquery";

import {TransitionGroup, CSSTransition} from 'react-transition-group';
import { CategoryHeader, CategoryOuter, CateImg, CateName, CateSubItem, CateSubItemHead, CateSubOut1, CateSubOut2, CateTog } from "./CategoryStyle";
function Filter(props){
    
    console.log(props.is_true)
    const [po ,setPo]=useState(false)
    
    return(
           <div className={(props.is_true||po)?"filter":"lo"}>
           <CSSTransition in={props.is_true} timeout={200} classNames="menu" unmountOnExit onEnter={()=>setPo(true)} onExited={()=>{setPo(false)}}>
            
            <div className="filter-menu1">
                <button className="closem" onClick={()=>{props.closeMenu()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10" style={{width: "12px", height: "12px"}}><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>
                </button>
                <div style={{height:"100%",overflowY:"hidden", zIndex:"11"}}>
                    <div style={{height:"100%",overflowY:"scroll" ,direction:"inherit"}}>
                        <div className="os-content">
                            <div style={{padding:"30px"}}>
                            
                            { props.category?
          Object.entries(props.category).map(([k,v])=>(
            <CategoryOuter>
              <CategoryHeader id={"cathead"+k}>
                <CateImg>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24.003" height="24" viewBox="0 0 24.003 24"><g id="Meat_Fish" data-name="Meat &amp; Fish" transform="translate(-100.274 -126.786)"><path id="Path_17433" data-name="Path 17433" d="M152.165,147.238c-.186,0-.366-.005-.542-.016a.465.465,0,0,1-.27-.108c-.525-.442-1.049-.911-1.546-1.38-.508-.508-.952-1.036-1.383-1.546a.545.545,0,0,1-.124-.289c-.234-3.811,2.129-10.143,4.769-12.784a9.528,9.528,0,0,1,1.8-1.453.463.463,0,1,1,.5.781,8.639,8.639,0,0,0-1.629,1.318c-2.42,2.42-4.661,8.375-4.515,11.929.4.474.8.944,1.236,1.378.439.414.907.835,1.379,1.236,3.5.153,9.508-2.1,11.919-4.506a8.691,8.691,0,0,0,1.328-1.638.463.463,0,1,1,.781.5,9.625,9.625,0,0,1-1.462,1.8C161.888,144.973,156.01,147.238,152.165,147.238Z" transform="translate(-42.009 -2.453)" fill="currentColor"></path><path id="Path_17434" data-name="Path 17434" d="M105.065,249.978a2.457,2.457,0,0,1-1.745-.729,2.547,2.547,0,0,1-.707-1.61,2.454,2.454,0,0,1-2.338-2.483,2.479,2.479,0,0,1,3.513-2.21l2.637-2.663a.464.464,0,0,1,.659.653l-2.889,2.916a.465.465,0,0,1-.592.055,1.547,1.547,0,0,0-2.4,1.257,1.544,1.544,0,0,0,.457,1.114,1.572,1.572,0,0,0,1.365.416.463.463,0,0,1,.535.536,1.592,1.592,0,0,0,.425,1.374,1.54,1.54,0,0,0,2.355-1.963.464.464,0,0,1,.062-.583l2.916-2.888a.463.463,0,1,1,.652.658l-2.668,2.644a2.487,2.487,0,0,1-.491,2.778A2.454,2.454,0,0,1,105.065,249.978Z" transform="translate(0 -99.192)" fill="currentColor"></path><path id="Path_17435" data-name="Path 17435" d="M206.374,138.769a5.236,5.236,0,0,1-2-.475A14.609,14.609,0,0,1,200,135.177c-2.193-2.193-3.6-4.707-3.593-6.4a1.862,1.862,0,0,1,1.989-1.987h.018c1.7,0,4.2,1.408,6.385,3.593l0,0c2.629,2.655,4.592,6.308,3.05,7.848A2.011,2.011,0,0,1,206.374,138.769Zm-7.96-11.056H198.4a.948.948,0,0,0-1.067,1.066c-.008,1.439,1.327,3.747,3.322,5.743a13.669,13.669,0,0,0,4.084,2.92c1.138.483,2.054.532,2.455.133.814-.814-.239-3.7-3.054-6.541C202.153,129.045,199.854,127.713,198.414,127.713Z" transform="translate(-84.117 0)" fill="currentColor"></path><path id="Path_17436" data-name="Path 17436" d="M216.843,148.223h0c-1.039,0-2.9-1.214-4.749-3.084-1.538-1.518-3.09-3.585-3.079-4.77a.963.963,0,0,1,.283-.715.95.95,0,0,1,.7-.266H210c1.187,0,3.243,1.544,4.76,3.081,1.868,1.845,3.079,3.707,3.082,4.746a.944.944,0,0,1-1,1.008Zm-6.811-7.916a.268.268,0,0,0-.1.017c-.133.33.7,2.069,2.815,4.161,2.27,2.3,3.912,2.933,4.181,2.8.115-.253-.521-1.895-2.816-4.159l0,0C212.174,141.163,210.54,140.306,210.032,140.306Z" transform="translate(-95.146 -11.027)" fill="currentColor"></path><path id="Path_17437" data-name="Path 17437" d="M181.251,168.174l-.83-.41a5.223,5.223,0,0,1,.391-.689.464.464,0,0,1,.755.539A4.148,4.148,0,0,0,181.251,168.174Z" transform="translate(-70.129 -35.084)" fill="currentColor"></path><path id="Path_17438" data-name="Path 17438" d="M164.789,189.173a.478.478,0,0,1-.095-.01.463.463,0,0,1-.359-.548,18.285,18.285,0,0,1,1.23-3.8.464.464,0,0,1,.845.381,17.358,17.358,0,0,0-1.168,3.611A.463.463,0,0,1,164.789,189.173Z" transform="translate(-56.046 -50.535)" fill="currentColor"></path><path id="Path_17439" data-name="Path 17439" d="M239.96,170.8a.463.463,0,0,1-.328-.136l-.382-.382a.463.463,0,0,1,.655-.655l.382.382a.464.464,0,0,1-.328.791Z" transform="translate(-121.487 -37.372)" fill="currentColor"></path></g></svg>
                </CateImg>
                <CateName>
                {v["obj"].name?v["obj"].name:"po"}
                </CateName>
                {v.child?<CateTog onClick={()=>{props.openSub(k)}} id={"togcat"+k}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16px"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" fill="currentColor" stroke="currentColor"></path></svg>
                </CateTog>:""}
              </CategoryHeader>
              {v.child?
                  <CateSubOut1 id={"subs"+k}>
                     <CateSubOut2 id={"di"+k}>
                     {v.child.map((sub)=>(
                       <CateSubItem>
                         <CateSubItemHead>
                           {sub.name}
                         </CateSubItemHead>
                       </CateSubItem>
                     ))}
                      </CateSubOut2>
                  </CateSubOut1>
          :""}
            </CategoryOuter>
          ))
         :
          <>
          <div class="item"> 
          bvhgbjfv
          </div>
          <div class="item"> 
          bvhgbjfv
          </div>
          <div class="item"> 
          bvhgbjfv
          </div>
          </>}
                                    
                                    
                            </div> 

                        </div>


                    </div>

                </div>
                
            </div>
            </CSSTransition> 
            </div>
        
         
     
    )
    
}
export default Filter;