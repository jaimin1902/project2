const home = async(req,res)=>{
    try {
        res.status(200).send("hello jaimin");

    } catch (error) {
        console.log(error);
    }
}

const register = async(req,res)=>{
try {
    res.status(200).send("hello prajapati");

} catch (error) {
    console.log(error);
}
}

module.exports={home,register};