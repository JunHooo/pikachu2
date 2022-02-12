const string = `.eye{
    border: 2px solid rgb(9,9,9);
    background-color: rgb(45, 45, 45);
    width: 60px;
    height: 60px;
    position: absolute;
    left:50%;
    margin-left: -30px;
    top:200px;
}
.eye.left{
    transform: translateX(-100px);
    border-radius: 50%;
}   
.eye.right{
    transform: translateX(100px);
    border-radius: 50%;
}   
.eye::before{
    content:'';
    display: block;
    border:1px solid rgb(65, 65, 65);
    background-color: rgb(225, 225, 225);
    border-radius: 50%;
    height: 25px;
    width: 25px;
    margin-left: 10px;
}
.nose{
    border: 10px solid black ;
    border-color:black transparent transparent transparent;
    position: absolute;
    width: 0px;
    height: 0px;
    left:50%;
    margin-left: -5px;
    top:250px;  
}
.nose .yuan1{
    background-color: black;
    height: 5px;
    width: 20px;
    margin-left: -10px;
    margin-top: -15px;
    border-radius: 50% 50% 0 0;
}
.mouth{
    position: absolute;
    width: 100px;
    height: 100px;
    left:50%;
    margin-left:-50px;
    top:300px;
}
.mouth .up .lif{
    position: relative;
    z-index: 10;
    background-color: rgb(255, 219, 0);
}
.mouth .up .lif.left{
    position: relative;
    border: 2px solid black;
    width: 50px;
    height: 25px;
    border-radius: 0 0 0 50px;
    border-top-color: transparent;
    transform: rotate(-30deg) ;
    left:50%;
    position: absolute;
    margin-top: -10px;
    margin-left: -50px;
}
.mouth .up .lif.left::before{
    position: absolute;
    content: '';
    display: block;
    /* border: 1px solid rgb(255, 219, 0); */
    width: 7px;
    height: 25px;
    right: -4px;
    bottom: 0px;
    background-color: rgb(255, 219, 0);    
}
.mouth .up .lif.right{
    position: relative;
    border: 2px solid black;
    width: 50px;
    height: 25px;
    border-radius: 0 0 50px 0px;
    border-top-color: transparent;
    transform: rotate(30deg) translateX(-55px);
    left:50%;
    position: absolute;
    margin-left: 50px;
    margin-top: 18px;
}
.mouth .up .lif.right::before{
    position: absolute;
    content: '';
    display: block;
    width: 7px;
    height: 25px;
    left:-3px;
    bottom: 0px;
    background-color: rgb(255, 219, 0);    
}
.down{
    position: relative;
    width: 100px;
    height: 120px;
    overflow: hidden;
    background-color:rgb(255, 219, 0) ;

}
.down .yuan2{
    position: relative;
    border: 2px solid black;
    background-color:#9b000a;
    width: 80px;
    height: 300px;
    border-radius: 100px/250px ;
    margin-top: -186px;
    margin-left: 10px;
    overflow: hidden;
}
.down .yuan2 .yuan3{
    position: absolute;
    width: 100px;
    height: 100px;
    left: 50%;
    margin-left: -50px;
    margin-top: 202px;
    border-radius: 60px 60px 0 0 ;
    background-color: #ff485f;
}

.face{
    border-radius: 50%;
    border: 2px solid rgb(9,9,9);
    background-color: rgb(255, 24, 0);
    width: 60px;
    height: 60px;
    position: absolute;
    left:50%;
    margin-left: -30px;
    top:300px;
}
.face.left{
    transform: translateX(200px);
}
.face.right{
    transform: translateX(-200px);
}`
export default string;