const pubKey = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApbFoc8BZxlsdYs5xp/SX+JSDavrOu1QCszolUsylpvTsxYxwZ+cj2IMsd7ojnzYDXYsZTZYg8D45bv2gtXtitdiJOJuYFYxNg2set7GzGr5h21TvIkpfBW1Mf4SVcMPM6XlZFXorn9S5W6NIy6K3Bcgj6wARLvYbW492mHCipNvw44c828fOS/rIMfstI6Zyby44Qr6LfryTLTaSgewkeZw8W4ZZORR1n8odN41y2/QFAgsR4wAimTiJya+lj7tg9oNaKPEdQZTGPuZo7sC3uJgHbDs04ssDSaZ1Sdt7XbhmqDka15R7s3qQlIobZ/uTYIiJuSJrzlTRRumu1bdWUwIDAQAB-----END PUBLIC KEY-----";
const priKey = "-----BEGIN PRIVATE KEY-----MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQClsWhzwFnGWx1iznGn9Jf4lINq+s67VAKzOiVSzKWm9OzFjHBn5yPYgyx3uiOfNgNdixlNliDwPjlu/aC1e2K12Ik4m5gVjE2Dax63sbMavmHbVO8iSl8FbUx/hJVww8zpeVkVeiuf1Llbo0jLorcFyCPrABEu9htbj3aYcKKk2/Djhzzbx85L+sgx+y0jpnJvLjhCvot+vJMtNpKB7CR5nDxbhlk5FHWfyh03jXLb9AUCCxHjACKZOInJr6WPu2D2g1oo8R1BlMY+5mjuwLe4mAdsOzTiywNJpnVJ23tduGaoORrXlHuzepCUihtn+5NgiIm5ImvOVNFG6a7Vt1ZTAgMBAAECggEBAJnqnjwAb6TKGRci7QN3PADHfPjQuV/c35E8L1WmEy9vj87G8dgjJ/JFj/Y8LEEGfMPVphCjqD9jnhiTdEmBr6V626WBLBrANXUh+evsH5N1TRPg5y80ZOZ2rLw8HlIdIOm1NuKzlXios/MDUGkR4vB1BaCUdGHqbml0cFeVMhDvXB/r6D01F/DDS0lnxzg3LKsAdCZiXG09i9Qch0YuSF15QMpYdc/x0sHpsYRdRjRPyUEq4dRem49kRYnej2MumPypSNgmCc460n//T5HqPeiWkS7koatGKeHcX0UW6kkQ9omER2kNRzkG946Fdc3ULiQtCWEHAIrVnHBUaw5E79kCgYEA0+J/A1HKIFjOWFzHo3vvopK3Dg0pIr59pZOWWHR9nuI7gIUvWwv3bsjD/X3htu5H/RhbORVM9iYNAi9UbHHg0F1LyzXjTMd1/mKmoLJPnnt01R6bUBhp3pDPPdGUmcKa+ZdSOabv7q7PmaRUkmJb4clgxfvsDJP3kB518SZ1C60CgYEAyDDho3BXxbeu/tPFdYvqv8nodQBQ4mArLTlhAIUgYY4RyFcxyj8HSsC351xBmaI3ZZw4fYtQD4PNQKNCDxaNyK0WyUWWU+R8EjcLr/4zAeOJyL7tM5B7DNh4WIC7g/jMabiSM95Z3AAp1UVBpg6Ef+xHFOJJbUtrW252ehGKKf8CgYBYIuYMfnAipm4m6WkNwxb6PCczDBxpXG2te0fVwZcjiR2RJ1V8fOzOw2prPnquek2tpP0FMKwT094jY4atmW0Xn0dQ3ziOjoWxbF29iI5/8QC3SgT2+0DGmNvr7grvLrkCS4SjgKJbWZH3ahjXz1xC/l5n3JPi44XeCB2tUv7q/QKBgQCcFEBXxQcpyARP+ZxCAUyNK0Zpsk1dscz3/Xx7g0+zv6htok3XeTyeM5MududOeQLn3dzNRQiuj/w/IQon6VWx2AGj+vUxgzqYmQIrvOzX1CdgtDsLsOG/KibqGbQZOKlm49hZSEqXFCmJde2xIjB77COfTK4i4GJbbsxAb9xg0QKBgAr7QKr4AL9djjqO22heroIdFshdQXMS3no6U6GHKCdg3QzqraapUtcPBhJsy2/ApLn78nQzT8hQgQtbzIsHlWild4xfcUSmLUjwJWlVAANcMZ5BAdQ3NA78tZPokMmn2BCp8Q3xG7OL2che5120loKKsxdC0nEdde3DufsqYTnZ-----END PRIVATE KEY-----";

const tokenConfig = {
  // 使用的加密算法
  algorithm: "RS256",
  // 设置有效时间
  expiresIn: "5m",
  // 在某个时间之前不可用
  notBefore: "0",
  // 发布者
  issuer: "pandorQ",
  jwtid: "123456",

  // audience: "",
  // 主题
  subject: "",
  // noTimestamp: ,
  // header: "",
  // keyid: "",
  // mutatePayload: ""
}




const keys = {
  pubKey,
  priKey,
  tokenConfig
}

export default keys