<template>
    <div class="rotating-circle animation">
        <div class="circle" v-bind:class="{ rotate: rotate }">
            <div class="circle1">
                <span class="span1" :data-number="randomNumber()">
                    <b class="b1"
                        >{{ randomNumber() }} X {{ randomNumber() }}</b
                    ></span
                >
                <span class="span2"
                    ><b class="b2"
                        >{{ randomNumber() }} * {{ randomNumber() }}</b
                    ></span
                >
                <span class="span3">
                    <b class="b3"
                        >{{ randomNumber() }} X {{ randomNumber() }}</b
                    ></span
                >
                <span class="span4"
                    ><b class="b4"
                        >{{ randomNumber() }} X {{ randomNumber() }}</b
                    ></span
                >

                <button class="button" @click="rotate = !rotate">SPIN</button>
                <span class="span5"
                    ><b class="b5"
                        >{{ randomNumber() }} X {{ randomNumber() }}</b
                    ></span
                >

                <span class="span6"
                    ><b class="b6"
                        >{{ randomNumber() }} X {{ randomNumber() }}</b
                    ></span
                >
                <span class="span7"
                    ><b class="b7"
                        >{{ randomNumber() }} X {{ randomNumber() }}</b
                    ></span
                >
                <span class="span8"
                    ><b class="b8"
                        >{{ randomNumber() }} X {{ randomNumber() }}</b
                    ></span
                >
            </div>
        </div>

        <div class="arrow"></div>
        <div class="inputParent"></div>
        <input class="input" type="number" />
    </div>
</template>

<script>

export default {
  name: 'App',
  data (){
return{
    rotate:false,
    numbers:{
        
    },
    degree:{
    

    },
    
}
  },
  
  methods:{
 
    randomNumber : function(){
      return this.numbers = Math.floor(Math.random() * (10)) + 1;
    },
    

},


  }


</script>

<style>
span {
    width: 50%;
    height: 50%;
    display: inline-block;
    margin: 0;
}

.span1 {
    clip-path: polygon(0% 92%, 100% 50%, 0 8%);
    top: 120px;
    left: 0;
    background-color: #aa2600;
    position: absolute;
}

.span2 {
    clip-path: polygon(100% 184%, 0 50%, 100% 1%);
    top: 118px;
    left: 251px;
    background-color: royalblue;
    position: absolute;
}

.span3 {
    clip-path: polygon(52% 0, 12% 102%, 112% 100%);
    bottom: 0;
    left: 119px;
    background-color: #ff99ff;
    position: absolute;
}

.span4 {
    clip-path: polygon(50% 100%, 92% 0, 8% 0);
    top: 0;
    left: 120px;
    background-color: #ffff1a;
    position: absolute;
}

.span5 {
    clip-path: polygon(50% 98%, 92% 0, 8% 0);
    top: 36px;
    left: 37px;
    background-color: #ffdb4d;
    position: absolute;
    transform: rotate(-43deg);
}

.span6 {
    clip-path: polygon(50% 100%, 92% 0, 8% 0);
    top: 29px;
    right: 37px;
    background-color: #33cc33;
    position: absolute;
    transform: rotate(45deg);
}

.span7 {
    clip-path: polygon(50% 100%, 92% 0, 8% 0);
    bottom: 36px;
    right: 37px;
    background-color: #8c1aff;
    position: absolute;
    transform: rotate(135deg);
}

.span8 {
    clip-path: polygon(50% 104%, 94% 0, 8% 0);
    bottom: 36px;
    left: 36px;
    background-color: #cc00cc;
    position: absolute;
    transform: rotate(224deg);
}
.rotating-circle {
    position: relative;
    width: 500px;
    height: 500px;
}

.circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    border: 10px solid black;
}

.button {
    top: 45%;
    left: 42%;
    border-radius: 40%;
    padding: 10px;
    position: absolute;
    z-index: 1;
    outline: none;
    border: none;
    padding: 15px;
    background-color: #ff9999;
}

.b1 {
    width: 50px;
    height: 50px;
    font-size: 15px;
    text-align: center;
    position: absolute;
    top: 45%;
    left: 42%;
}

.b2 {
    width: 50px;
    height: 50px;
    font-size: 15px;
    text-align: center;
    position: absolute;
    top: 45%;
    left: 42%;
}

.b3 {
    width: 50px;
    height: 50px;
    font-size: 15px;
    text-align: center;
    position: absolute;
    top: 45%;
    left: 42%;
}

.b4 {
    width: 50px;
    height: 50px;
    font-size: 15px;
    text-align: center;
    position: absolute;
    top: 45%;
    left: 42%;
}

.b5 {
    width: 50px;
    height: 50px;
    font-size: 15px;
    text-align: center;
    position: absolute;
    top: 45%;
    left: 42%;
}

.b6 {
    width: 50px;
    height: 50px;
    font-size: 15px;
    text-align: center;
    position: absolute;
    top: 45%;
    left: 42%;
}

.b7 {
    width: 50px;
    height: 50px;
    font-size: 15px;
    text-align: center;
    position: absolute;
    top: 34%;
    left: 42%;
    transform: rotate(180deg);
}

.b8 {
    width: 50px;
    height: 50px;
    font-size: 15px;
    text-align: center;
    position: absolute;
    top: 45%;
    left: 42%;
}
.arrow {
    clip-path: polygon(50% 104%, 94% 0, 8% 0);
    bottom: 36px;
    left: 36px;
    background-color: #cc00cc;
    position: absolute;
    transform: rotate(224deg);
}
.rotate {
    animation: pulse 5s;
    animation-duration: 3s;
}

@keyframes pulse {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
}

.input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    position: absolute;
    top: 600px;
    border: solid 1em goldenrod;
    border-image: conic-gradient(#f21c31, #020024, #1a85bb) 1;
}

.inputParent {
    position: relative;
}

.arrow {
    margin-top: 14px;
    transform: rotate(180deg);
    background-color: #ff9999;
    top: 477px;
    width: 26px;
    left: 223px;
    height: 77px;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 30px solid transparent;
    float: right;
}
</style>
//