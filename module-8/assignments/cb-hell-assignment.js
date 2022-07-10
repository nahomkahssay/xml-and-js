const timeout = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 40);
}

const generateData = async () => {
    await timeout(3000);
    const data = Array.from({ length: 20 }, 
        generateRandomNumber);
    return data;
}

const convertToFeet = async (meters) => {
    const feet = meters * 3.2808;
    await timeout(3000);
    return feet;
}

const processData = async (data, callback) => {
    const lst = data.map(async (value) => {
        return await callback(value);
    });
    return await Promise.all(lst);
}

const logResult = (meters, feet) => {
    console.log(`Converted ${meters}m to ${feet}ft`);
}

(async () => {
    console.log("Start");
    const List = await generateData();
    const feetList = await processData(List, convertToFeet);
     for (let i = 0; i < List.length; i++) {
        logResult(List[i], feetList[i]);
    }
    console.log("Finish");
})();