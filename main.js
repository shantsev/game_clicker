let money = 15000
let clicks = 1
let auto = 0

let clks_1 = 5
let clks_2 = 500
let clks_3 = 1000

let auto_1 = 250
let auto_2 = 1000
let auto_3 = 2500

document.getElementById('error_msg').hidden = true

document.getElementById('btn_money').onclick = function() {
    money += clicks

    document.getElementById('money').innerHTML = money

    document.getElementById('error_msg').hidden = true
}

document.getElementById('clks_1').onclick = function() {
    if (money >= clks_1) {
        money -= clks_1
        clicks += 1

        clks_1 = clks_1 * 2

        document.getElementById('money').innerHTML = money

        document.getElementById('clks_info').innerHTML = 'Клики: ' + clicks
        document.getElementById('clks_1').value = '+1 клик / ' + clks_1
    } else {
        document.getElementById('error_msg').innerHTML = 'Error - недостаточно денег!'
        document.getElementById('error_msg').hidden = false
    }
}

document.getElementById('clks_2').onclick = function() {
    if (money >= clks_2) {
        money -= clks_2
        clicks += 5

        clks_2 = clks_2 * 2

        document.getElementById('money').innerHTML = money

        document.getElementById('clks_info').innerHTML = 'Клики: ' + clicks
        document.getElementById('clks_2').value = '+5 клик / ' + clks_2
    } else {
        document.getElementById('error_msg').innerHTML = 'Error - недостаточно денег!'
        document.getElementById('error_msg').hidden = false
    }
}

document.getElementById('clks_3').onclick = function() {
    if (money >= clks_3) {
        money -= clks_3
        clicks += 10

        clks_3 = clks_3 * 2

        document.getElementById('money').innerHTML = money

        document.getElementById('clks_info').innerHTML = 'Клики: ' + clicks
        document.getElementById('clks_3').value = '+10 клик / ' + clks_3
    } else {
        document.getElementById('error_msg').innerHTML = 'Error - недостаточно денег!'
        document.getElementById('error_msg').hidden = false
    }
}

document.getElementById('auto_1').onclick = function() {
    if (money >= auto_1) {
        money -= auto_1
        auto += 1

        auto_1 = auto_1 * 2

        setInterval(function(){
            money += auto
    
            document.getElementById('auto_1').value = '+1/сек / ' + auto_1
    
            document.getElementById('money').innerHTML = money

            document.getElementById('auto_info').innerHTML = 'Авто: ' + auto
        }, 1000);
    } else {
        document.getElementById('error_msg').innerHTML = 'Error - недостаточно денег!'
        document.getElementById('error_msg').hidden = false
    }
}

document.getElementById('auto_2').onclick = function() {
    if (money >= auto_2) {
        money -= auto_2
        auto += 5

        auto_2 = auto_2 * 2

        setInterval(function(){
            money += auto
    
            document.getElementById('auto_2').value = '+5/сек / ' + auto_2
    
            document.getElementById('money').innerHTML = money

            document.getElementById('auto_info').innerHTML = 'Авто: ' + auto
        }, 1000);
    } else {
        document.getElementById('error_msg').innerHTML = 'Error - недостаточно денег!'
        document.getElementById('error_msg').hidden = false
    }
}

document.getElementById('auto_3').onclick = function() {
    if (money >= auto_3) {
        money -= auto_3
        auto += 10

        auto_3 = auto_3 * 2

        setInterval(function(){
            money += auto
    
            document.getElementById('auto_3').value = '+10/сек / ' + auto_3
    
            document.getElementById('money').innerHTML = money

            document.getElementById('auto_info').innerHTML = 'Авто: ' + auto
        }, 1000);
    } else {
        document.getElementById('error_msg').innerHTML = 'Error - недостаточно денег!'
        document.getElementById('error_msg').hidden = false
    }
}