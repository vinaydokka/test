let loadChairs;
let loadBenches;
let loadTables;
let isloaderror = false;

//*********************Main function Start************************/
//Objects Diclaration//

function main() {
    let chairs = {
        name: 'chairs',
        price: 500,
        quantity: 150
    };

    let benches = {
        name: 'chair',
        price: 1500,
        quantity: 120
    };

    let tables = {
        name: 'chair',
        price: 100,
        quantity: 130
    };

    load(chairs, benches, tables);
    validObject(chairs, benches, tables);
}
//***********************End Main function***************************/
function validObject(stockObject, stockObjectone, stockObjecttwo) {
    //console.log(chairs);
    //console.log(chairs.name);
    //console.log(stockObject);
    //console.log(stockObjectone);
    //console.log(stockObjecttwo);

    if (typeof stockObject == 'object') {
        true;

    } else {
        console.log('enter Objects only');
        return;
    }
    if (typeof stockObject.name == 'string') {
        true;
    } else {
        console.log('enter name as string only');
        return;
    }

    //console.log(stockObject.price);

    if (typeof stockObject.price == 'number') {
        true;

    } else {
        console.log('enter numbers only');
        return;
    }

    if (typeof stockObject.quantity == 'number') {
        true;

    } else {
        console.log('enter numbers only');
        return;
    }

    /////benches objects///
    if (typeof stockObjectone == 'object') {
        true;

    } else {
        console.log('enter Objects only');
        return;
    }
    if (typeof stockObjectone.name == 'string') {
        true;
    } else {
        console.log('enter name as string only');
        return;
    }

    //console.log(stockObject.price);

    if (typeof stockObjectone.price == 'number') {
        true;

    } else {
        console.log('enter numbers only');
        return;
    }

    if (typeof stockObjectone.quantity == 'number') {
        true;

    } else {
        console.log('enter numbers only');
        return;
    }

    /////tables objects///
    if (typeof stockObjecttwo == 'object') {
        true;

    } else {
        console.log('enter Objects only');
        return;
    }
    if (typeof stockObjecttwo.name == 'string') {
        true;
    } else {
        console.log('enter name as string only');
        return;
    }

    //console.log(stockObject.price);

    if (typeof stockObjecttwo.price == 'number') {
        true;

    } else {
        console.log('enter numbers only');
        return;
    }

    if (typeof stockObjecttwo.quantity == 'number') {
        true;

    } else {
        console.log('enter numbers only');
        return;
    }


}



//***********************Start Load function***************************/
function load(chairs, benches, tables) {


    //console.log(chairs);
    //console.log(loadChairs);

    if (typeof chairs != 'object') {
        console.log('please enter  object');
        isloaderror = true;
        return;
    }

    if (typeof benches != 'object') {
        console.log('please enter  object');
        isloaderror = true;
        return;
    }

    if (typeof tables != 'object') {
        console.log('please enter  object');
        isloaderror = true;
        return;
    }

    loadChairs = chairs;
    loadBenches = benches;
    loadTables = tables;

}

//***********************End Load function***************************/

//***********************Start productpurchase function *********************/
function purchased(chairs, benches, tables, discount) {
    //console.log(chairs);
    //console.log(loadTables);
    //console.log(loadBenches.Quantity);


    //**load function is not loaded autometically terminate the purchase function condition Checking*/
    if (!isloaderror) {
        //*only Number is Accepted conditions Checking */
        if (typeof discount != 'number') {
            console.log('please enter number');
            return;
        }

        if (typeof chairs != 'number') {
            console.log('please enter number');
            return;
        }

        if (typeof benches != 'number') {
            console.log('please enter number');
            return;
        }

        if (typeof tables != 'number') {
            console.log('please enter number');
            return;
        }
        //**purchase items and load items condition Checking****/
        if (chairs >= loadChairs.Quantity) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Chairs are not available');
            console.log('error message');
            console.log(`here Stock:${loadChairs.Quantity}`);
            console.log(`Required Qty:${chairs}`);
            return;

        } else {
            console.log('Chairs are available');

        }

        if (benches >= loadBenches.Quantity) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Benches are not available');
            console.log('error message');
            console.log(`here Stock:${loadBenches .Quantity}`);
            console.log(`Required Qty:${benches}`);
            return;

        } else {
            console.log('Benches are available');

        }

        if (tables >= loadTables.Quantity) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Tables are not available');
            console.log('error message');
            console.log(`here Stock:${loadTables .Quantity}`);
            console.log(`Required Qty:${Tables}`);
            return;

        } else {
            console.log('Tables are available');
        }

        if (discount > 0 && discount <= 100) {
            console.log('valid discount')
        } else {
            console.log('discount is not valid');
        }

        loadChairs.quantity = loadChairs.quantity - chairs;
        loadBenches.quantity = loadBenches.quantity - benches;
        loadTables.quantity = loadTables.quantity - tables;
        display(chairs, benches, tables, discount);
    } else {
        console.log('stock not loaded properly');

    }


}
//***********************End productpurchase function *********************/

//***********************Start Display function *********************/

function display(itemChairs, itemBenches, itemTables, discount) {

    let chairsPrice = itemChairs * loadChairs.price;
    let benchesPrice = itemBenches * loadBenches.price;
    let tablesPrice = itemTables * loadTables.price;
    let totalPrice = chairsPrice + benchesPrice + tablesPrice;
    let totalDiscount = totalPrice * discount / 100;
    ///*DIsplays the all items in display function***/
    console.log('Purchased');
    console.log('.....................');
    console.log(`Chairs:${itemChairs}`);
    console.log(`Benches:${itemBenches}`);
    console.log(`Tables:${itemTables}`);
    console.log('Remaining  items');
    console.log('.....................');
    console.log(`Available Chairs:${ loadChairs.quantity}`);
    console.log(`Available Benches:${ loadBenches.quantity}`);
    console.log(`Available Tables:${ loadTables.quantity}`)

    console.log('Total Price');
    console.log('.....................');
    console.log(`Chairs Price: ${chairsPrice}`);
    console.log(`Benches Price: ${benchesPrice}`);
    console.log(`Tables Price: ${tablesPrice}`);
    console.log(`Total Price: ${totalPrice}`);
    console.log(`Total Discount: ${totalDiscount}`);
    console.log(`Payable Amount: ${totalPrice-totalDiscount}`);
}
//***********************End Display function *********************/

main();
purchased(50, 50, 50, 10);
purchased(50, 50, 50, 10);
purchased(50, 50, 50, 10);