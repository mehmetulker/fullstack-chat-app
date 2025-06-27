import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";

// Kullanıcıdan gelen mesajı işler ve veritabanına kaydeder
export const sendMessage = async (req, res) => {
  try {
    // İstekten gelen mesaj içeriğini alıyoruz
    const { message } = req.body;
    // console.log("message", message);

    // URL parametresinden alıcı kullanıcının ID'sini alıyoruz
    const { id: receiverId } = req.params;
    console.log("req.params", receiverId);

    // Giriş yapan (mesaj gönderen) kullanıcının ID'sini alıyoruz
    const senderId = req.user._id;
    console.log("senderId", senderId);

    // Daha önce bu iki kullanıcı arasında konuşma (conversation) var mı kontrol ediyoruz
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // Eğer konuşma yoksa, yeni bir konuşma oluşturuluyor
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // Yeni mesaj nesnesi oluşturuluyor ve veritabanına kaydediliyor
    const newMessage = await Message.create({
      senderId, // gönderen kişi
      receiverId, // alıcı kişi
      message, // mesaj içeriği
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]);

    // Başarıyla mesaj gönderildiğini belirten cevap dönülüyor
    res.status(201).json({
      message: "Mesaj gönderildi",
      newMessage,
    });
  } catch (error) {
    // Hata oluşursa konsola yazdır ve kullanıcıya hata mesajı gönder
    console.error("Mesaj gönderme hatası:", error.message);
    res.status(500).json({ success: false, error: "Sunucu hatası" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userChatId } = req.params;
    const senderId = req.user._id;

    // Kullanıcının katıldığı konuşmaları alıyoruz
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userChatId] },
    }).populate("messages");

    // Eğer konuşma yoksa, uygun bir mesaj döndürüyoruz
    if (!conversation || conversation.messages.length === 0) {
      return res
        .status(404)
        .json({ success: false, error: "Konuşma bulunamadı" });
    }

    // Konuşmadaki mesajları döndürüyoruz
    res.status(200).json({
      success: true,
      messages: conversation.messages,
    });
  } catch (error) {
    // Hata oluşursa konsola yazdır ve kullanıcıya hata mesajı gönder
    console.error("Mesajları alma hatası:", error.message);
    res.status(500).json({ success: false, error: "Sunucu hatası" });
  }
};
