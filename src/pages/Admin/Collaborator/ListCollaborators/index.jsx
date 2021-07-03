import { useRef } from "react";
import { MenuItem } from "@material-ui/core";
import { Col, FormGroup, Row } from "reactstrap";
import { FaCamera } from "react-icons/fa";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { FaSearch } from "react-icons/fa";

import Input from "../../../../components/Input";
import Select from "../../../../components/Select";

import styles from "./styles.module.css";
import userPhoto from "../../../../assets/images/evee.png";
import Button from "../../../../components/Button";

const ListCollaborators = () => {
  return (
    <Row>
  
       <Col xl="4" md="6" sm="12" style={{ marginBottom: "2vh" }}>   
      
          <div className={styles.bloco}>

              <div className={styles.userPhotoWrapper}>
                <img src={userPhoto} alt="userPhoto" className={styles.userFoto} />
              </div> 
  
              <div className={styles.text}>
              <p>Pedro</p>
               
               <p>Gerente</p>
               <p>Desenvolvimento</p>
               </div>
            
          </div> 

       </Col>

       <Col xl="4" md="6" sm="12" style={{ marginBottom: "2vh" }}>   
      
        <div className={styles.bloco}>

            <div className={styles.userPhotoWrapper}>
              <img src={userPhoto} alt="userPhoto" className={styles.userFoto} />
            </div> 

            <div className={styles.text}>
            <p>Pedro</p>
            
            <p>Gerente</p>
            <p>Desenvolvimento</p>
            </div>
          
        </div> 

      </Col>

      <Col xl="4" md="6" sm="12" style={{ marginBottom: "2vh" }}>   
      
      <div className={styles.bloco}>

          <div className={styles.userPhotoWrapper}>
            <img src={userPhoto} alt="userPhoto" className={styles.userFoto} />
          </div> 

          <div className={styles.text}>
          <p>Pedro</p>
          
          <p>Gerente</p>
          <p>Desenvolvimento</p>
          </div>
        
      </div> 

    </Col>




     

    </Row>
  );
};

export default ListCollaborators;
