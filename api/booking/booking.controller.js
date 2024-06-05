// import { User } from "../user/user.model.js";
import { User } from "../../api/user/user.model.js";

export async function create(req, res, next){
    const {email, latitude, longitude} = req.body;
    console.log(`승객 ${email}의 위치(${latitude},${longitude})로 주변 택시를 검색해보자`);
    
    //유재석을 넘길필요는 없고, 탑승자의 위도값+경도값만 넘겨서 찾아라
    const founds = await User.getDriver({latitude, longitude});
    console.log(JSON.stringify(founds));
}