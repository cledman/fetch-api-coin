function getData(){
    const apiKey={
        key:'PUT YOUR API CODE HERE'
    };
    
    let contentData = "";
    let dtFirstHistoricalData="";
    const coinLimit=10;
    
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey.key)
    .then((response) => {
            if(!response.ok) throw new Error('Could not execute the response:, status ' + response.status);
            return response.json();
    })
    .then((api) => {
        
        
        // Get 10 coins and symbols 
        for(let i = 0; i < coinLimit; i++){
            dtFirstHistoricalData=api.data[i].first_historical_data        
            contentData = contentData + `
        
                <div class="media coinItem">
                    <img src="imgs/coinImg.png" class="align-self-center mr-3 coin" alt="coin" >
                    <div class="media-coin">
                       <h2 >${api.data[i].name}</h5>
                        <p class="subTitle">${api.data[i].symbol}</p>
                        <p class="text-right">First Historial data:</p>     
                        <p class="dtHistorical">${moment(dtFirstHistoricalData).format('DD/MM/Y')}</p>           
                    </div>
                </div>
    
            `;

            document.getElementById("coins").innerHTML = contentData;
            
        }
    })
    .catch((error) => {
        console.error(error.message);
    });
}

