


const allbtn = document.querySelectorAll("kbd");
const array = [];

for (const kbd of allbtn) {
    kbd.addEventListener("click", function (event) {
        const seat = event.target.innerText ;
        if(array.includes(seat)){
            return alert("You cannot select Same Seat More Than One")
        }
            // event.target.setAttribute("disabled" ,true);
            // console.log(event.target)
            array.push(event.target.innerText)
        
        const selectSeatsContainer = document.getElementById("selected-seats-container");
        
        
        if (getValueById("selected-seat") + 1 >4   ) {
            alert("You Cannot Select More Than Four Seat")
            return

        }
        event.target.classList.add("!bg-green-500")     
        event.target.classList.add("text-white")     
        
    
        
        const div = document.createElement("div");
        div.classList.add("selected-seats")

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText = seat;
        p2.innerText = "Economoy";
        p3.innerText = "550";

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        
        selectSeatsContainer.appendChild(div)
         


        updatedTotalSeat()
        updatedTotalselectedseat()
        updatedTotalCost(p3.innerText)
        updatedGrandTotal()
        
        





    });

}


function updatedGrandTotal(status) {
    const totalCost = getValueById("Total-cost");
    if (status == undefined) {

        document.getElementById("Grand-total").innerText = totalCost

    }
    else {
        const CouponCode = document.getElementById("Coupon-code").value;
        if (CouponCode == "NEW15") {
            const discountPrice = totalCost * .15;
            document.getElementById("Grand-total").innerText = totalCost - discountPrice;
        }
        else if (CouponCode == "Couple 20") {
            const discountPrice = totalCost * .2;
            document.getElementById("Grand-total").innerText = totalCost - discountPrice;

        } else {
            alert("Please Input Valid Code")
        }
        if (CouponCode =="NEW15" || CouponCode == "Couple 20" ){
            document.getElementById("Coupon-input").classList.add("hidden")
        }
    }
}
 

function updatedTotalSeat() {
    const Totalseat = getValueById("Total-seat")
    document.getElementById("Total-seat").innerText = Totalseat - 1;
    // console.log(Totalseat)

}

function updatedTotalselectedseat() {
    const selectedSeat = getValueById("selected-seat");
    document.getElementById("selected-seat").innerText = selectedSeat + 1;
    // console.log(selectedSeat)
}

function updatedTotalCost(value) {

    const totalCost = getValueById("Total-cost")
    const sum = totalCost + parseInt(value)
    document.getElementById("Total-cost").innerText = sum
    //     console.log(totalCost)
}



function InputphoneNumber(value){
    
    
    
    }


const nextbtn=document.getElementById("Next-btn")
nextbtn.addEventListener('click',function(btn){
    btn.target.setAttribute('disabled', true)
    const numberInput =document.getElementById("Phone-number").value;
    const nextBtn = document.getElementById("Next-btn");
    if(numberInput.length == 0  ) {
         alert("Input Your Phone Number");
         return
    }

})



function getValueById(id) {
    const targetElement = document.getElementById(id).innerText;
    return parseInt(targetElement);
}
