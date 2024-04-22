            let counter1 = counter2 = counter3 = 0;
            const countervalue1 = document.getElementById("counter1");
            const countervalue2 = document.getElementById("counter2");
            const countervalue3 = document.getElementById("counter3");
            function increment1(){
                counter1++;
                countervalue1.innerHTML = counter1;
                if(counter1 > 0){
                    document.getElementById("btn-dec-1").style.visibility = "visible";
                }
            }
            function decrement1(){
                counter1--;
                countervalue1.innerHTML = counter1;
                if(counter1 == 0){
                    document.getElementById("btn-dec-1").style.visibility = "hidden";
                }
            }
            function increment2(){
                counter2++;
                countervalue2.innerHTML = counter2;
                if(counter2 > 0){
                    document.getElementById("btn-dec-2").style.visibility = "visible";
                }
            }
            function decrement2(){
                counter2--;
                countervalue2.innerHTML = counter2;
                if(counter2 == 0){
                    document.getElementById("btn-dec-2").style.visibility = "hidden";
                }
            }
            function increment3(){
                counter3++;
                countervalue3.innerHTML = counter3;
                if(counter3 > 0){
                    document.getElementById("btn-dec-3").style.visibility = "visible";
                }
            }
            function decrement3(){
                counter3--;
                countervalue3.innerHTML = counter3;
                if(counter3 == 0){
                    document.getElementById("btn-dec-3").style.visibility = "hidden";
                }
            }
            let finalprice = 0;
            const checkoutval = document.getElementById("checkout");
            function checkout(){
                finalprice = (599 * counter1) + (counter2 * 899) + (counter3 * 699);
                checkoutval.innerHTML = finalprice;
            }
            function openpage(){
                window.location.href = "sub/checkout.html";
            }