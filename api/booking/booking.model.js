// 잠시후면, 이부분은 MongoDB로 바꿀꺼에요.
const Store = [
    {
        id: "123456",
        driver: "test@driver.com",
        user: "shindalosoo@naver.com",
        status: "booked", //canceled, end
    }
];

export const Booking = {
    create: async(user) => {
        if (Object.keys(user).length === 0) {
            console.log("내 주변에 택시가 없어 부킹할 수 없어요");
            return Promise.reject({
                message: "내 주변에 택시가 없어 부킹할 수 없어요",
            });
        } else {
            return Store.push(user); //db에 저장해라 + 추가된 후의 레코드 길이값
        }
    }
}