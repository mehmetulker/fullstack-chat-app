import mongoose from "mongoose";

// MongoDB veritabanına bağlantı kurmak için bir fonksiyon tanımlıyoruz.
const connectDB = async () => {
  try {
    // Mongoose kullanarak MongoDB'ye bağlanıyoruz. Bağlantı URI'si ortam değişkenlerinden (process.env.MONGO_URI) alınıyor.
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Bağlandı"); // Bağlantı başarılı olursa konsola bir mesaj yazdırıyoruz.
  } catch (error) {
    // Bağlantı sırasında bir hata oluşursa, hatayı konsola yazdırıyoruz.
    console.error("MongoDB Bağlantı Hatası:", error.message);
    process.exit(1); // Uygulamayı sonlandırıyoruz.
  }
};

export default connectDB; // connectDB fonksiyonunu diğer modüllerde kullanılabilmesi için dışa aktarıyoruz.
