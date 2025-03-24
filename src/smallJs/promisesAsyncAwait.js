const fetchData = () => {
    return new Promise((resolve, reject) => {
        const success = true;
        setTimeout(() => {
            if(success) {
                resolve('Data fetched successfully');
            }
            else {
                reject('Failed to fetch data');
            }
        }, 2000); 
    });
}


fetchData()
.then((data) => console.log(data))
.catch((error) => console.log(error));


const fetchDataAndDisplay = async () => {
    try {
        const data = await fetchData();
        console.log(data);
    }
    catch (error){
        console.log(error);
    }
};

fetchDataAndDisplay();