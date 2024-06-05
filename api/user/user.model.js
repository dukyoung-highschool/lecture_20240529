// 아래는 향후, 몽고DB로 바꿀것임 (꼭 잊지말고)
const Store = [
  {
    name: "유재석",
    role: "user",
    email: "yujaesuk@gmail.com",
    password: "1234",
    availablity: 0,
  },
  {
    name: "강호동",
    role: "driver",
    email: "hodong@naver.com",
    password: "4567",
    availablity: 1,
    position: {
      latitude: 17.38,
      longitude: 78.48,
    },
  },
];
  
export const User = {
  find: async (params) => {
    if (!params) return Store;
  },
  create: async (user) => {
    Store.push(user);
    return user;
  },
  findOne: async (condition) => {
    const keys = Object.keys(condition);
    const found = Store.find((u) => keys.every((k) => condition[k] === u[k]));
    return found || {};
  },
  available: async (email, { latitude, longitude }) => {
    const driver = Store.find((s) => s.email === email);
    driver.availablity = 1;
    driver.position.latitude = latitude;
    driver.position.longitude = longitude;
    return driver;
  },
  unavailable: async (email) => {
    const driver = Store.find((s) => s.email === email);
    driver.availablity = 0;
    return driver;
  },
  getDriver: async({latitude, longitude})=>{
    // 1번째조건 : 손님을 태울준비가 되고, 운전자여야해
    const drivers = Store.filter(
      (s) => s.availablity == 1 && s.role == "driver"
    )
    return drivers;
    // 2번째조건 : 나랑 가장 가까운 운전자를 찾아야함
    // 요기에 알고리즘
  }
};
  