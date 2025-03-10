window.onload=function(){
    // References to DOM Elements
    const prevBtn = document.querySelector("#prev-btn");
    const nextBtn = document.querySelector("#next-btn");
    const text = document.querySelector("#text");
    const hover = document.querySelector("#hover");
    const box = document.querySelector("#happy-valentines");
    // Event Listener
    prevBtn.addEventListener("click", goPrevPage);
    nextBtn.addEventListener("click", goNextPage);

    let currentLocation = 1;
    let numOfPapers = 22;
    let maxLocation = numOfPapers + 1;

    function goNextPage() {
        if(currentLocation < maxLocation) {
            switch(currentLocation) {
                case 1:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc các bạn nữ 12AK46 \"Trẻ mãi không già nhé <3 ; )) \"";
                    hover.innerHTML = "Bảo Đz đến All";
                    break;
                case 2:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Một người anh em của Trường Xuân Lẫm nói chung anh em mình không còn gì xa lạ nữa những gì tốt đẹp nhất tui cũng chúc cho bạn ở những sự kiện khác nhau rồi, đây chưa phải lời chúc cuối nhưng hi vọng nó thành sự thật, cố gắng thật thành công, vui vẻ, hạnh phúc, làm được nhiều điều mình muốn, sống tốt với bản thân và gia đình. Oke nha lời chúc 8/3 cuối cùng với cương vị là học sinh nhaaa";
                    hover.innerHTML = "Đức Huy đến Diễm My";
                    break;
                case 3:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "lại 1 người anh em Trường Xuân Lẫm của tui, nói chung riêng Phương không muốn nói nhiều. Chúc cho Phương thật thành công, thực hiện được tất cả mong muốn của bản thân, ăn được nhiều hơn những món ăn ưa thích, muốn gì ăn nấy không cần nhìn giáa cố gắng nhaa";
                    hover.innerHTML = "Đức Huy đến Hồng Phương";
                    break;
                case 4:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Riêng fen sẵn đây tui nói luôn 3 năm fen làm bí thư như vậy là quá oke rồi nhờ có fen mà lớp nó cũng nhộn nhịp hơn, tươi hơn, bây giờ đang ở chặn cuối chúc cho fen đỗ vào nguyện vọng 1, thành công trong cuộc sống và sâu xa hơn là công việc, làm được những điều mình muốn và đừng nản dù gặp bất cứ chuyện gì, mong cho fen trong tương lai trở thành phiên bản hoàn hảo nhất của chính mình";
                    hover.innerHTML = "Đức Huy đến Song Thương";
                    break;
                case 5:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Nói dài dòng, liêng thiêng mệt chúc cho bạn tương lai có một cuộc sống như mơ ước, thực hiện được mọi dự định của bản thân, còn về đỗ nguyện vọng 1 blabla tui tin bạn làm được, cố lên hi vọng năm sau họp lớp thấy Ý Nhi dắt anh nào đó đẹp đẹp ngon ngon về chơi nha, nói chung là chúc tất cả, lời chúc 8/3 cuối cùng trên danh nghĩa là học sinh nhaa";
                    hover.innerHTML = "Đức Huy đến Ý Nhi";
                    break;
                case 6:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc cậu 8/3 sống như nữ hoàng, vui tươi, lạc quan yêu đời.<br>Gặp nhiều may mắn trong cuộc sống, đạt được nhiều thành công trên con đường học tập và sự nghiệp.<br>Thực hiện được mọi điều cậu mong ước trong cuộc sống.<br>Nếu thấy cuộc sống mệt mỏi quá thì về bên tui ❤❤❤❤";
                    hover.innerHTML = "Ẩpn davnh đến Tiểu My ❤❤❤";
                    break;
                case 7:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "I love you <3";
                    hover.innerHTML = "ẩn danh đến Tiểu My";
                    break;
                case 8:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cho bạn diễm my có một ngày 8/3 thật vui vẽ và đày hạnh phúc nha";
                    hover.innerHTML = "Ẩn danh đến Dmy";
                    break;
                case 9:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Tên cậu đẹp lắm, nhất định phải có trong giấy trúng tuyển nhé";
                    hover.innerHTML = "Dô danh đến ý nhi";
                    break;
                case 10:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc các bạn sẽ không đẹp nhất nhưng sẽ đẹp nhất trong lòng ai đó .";
                    hover.innerHTML = "Ẩn danh đến Tất cả";
                    break;
                case 11:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cho mn có một ngày 8/3 thật vui vẻ ngày càng xinh đẹp thành công và đạt những thành tích tốt trong thời gian tới đặc biệt là đậu nv1 nhe";
                    hover.innerHTML = "Quốc an đến tất cả các bạn nữ của 12a";
                    break;
                case 12:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cậu 8/3 vui vẻ, đạt được nhiều thành công trong cuộc sống, mong cậu sẽ luôn hạnh phúc với lựa chọn của mình trên con đường mình chọn❤❤";
                    hover.innerHTML = "Ẩn dannh đến Khánh Hà";
                    break;
                case 13:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "I love you, Hà 😘❤";
                    hover.innerHTML = "Ẩn danh đến Khánh Hà";
                    break;
                case 14:
                    text.style.top = "280px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Cảm ơn cậu đã cùng mình đi hết 3 năm cấp 3. Hôm nay 8/3 mình chúc cậu mãi hạnh phúc, nhiều sức khỏe và may mắn, đạt được những mong ước của mình trong tương lai.❤❤❤";
                    hover.innerHTML = "Xuân Vinh đến Huỳnh Trang";
                    break;
                case 15:
                    text.style.top = "280px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc đại ca 8/3 vui vẻ, mãi hạnh phúc, nhiều sức khỏe và may mắn, đạt được những mong ước của mình trong tương lai.♥♥♥";
                    hover.innerHTML = "Xuân Vinh đến Bân Bân";
                    break;
                case 16:
                    text.style.top = "280px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc cậu một ngày 8/3 thật vui vẻ , luôn ngập tràn niềm vui hạnh phúc và yêu thương❤️💐. Dù 8/3 hay bất kì ngày nào đi nữa người đẹp cũng v nha . Và hãy luôn luôn là 1 đoá hoa rực rỡ nhất🌹<br>Và cuối cùng chúc cậu ngày càng xinh gái , học giỏi và đạt được ước mơ , đậu nv1 trong năm nay🍀";
                    hover.innerHTML = "Ẩn Danh đến Song Thương";
                    break;
                case 17:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "8/3 thật vui vẻ , ngày càng học giỏi , đẹp gái , đạt được ước mơ CAND nha";
                    hover.innerHTML = "Ẩn danh đến Hồng Phương";
                    break;
                case 18:
                    text.style.top = "280px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cậu 8/3 đánh nền không mốc , tán má không bết , kẻ mắt 5s , gắn mi nhoay nhoáy và chúc cậu mọi điều tốt đẹp và đỗ và ngành truyền thông mà mình yêu thích";
                    hover.innerHTML = "Ẩn Danh đến Lê Na";
                    break;
                case 19:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "8/3 thật vui vẻ , hạnh phúc , ngày càng xinh đẹp và sớm đạt được ước mơ của mình";
                    hover.innerHTML = "Ẩn Danh đến Diễm My";
                    break;
                case 20:
                    text.style.top = "270px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Nãy dùng hết văn rồi nên giờ chúc công nghiệp tí : chúc các bạn nữa AK-46 luôn xinh tươi,có nhiều niềm vui trong cuộc sống đỗ nguyện vọng 1 và tìm được nửa kia ưng ý của đời mình😘😘😘😘";
                    hover.innerHTML = "Bảo Khang đến Các bạn nữ AK-46";
                    break;
                case 21:
                    text.style.top = "270px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc bạn lúc nào cũng xinh đẹp, rạng rỡ như một bông hoa tràn đầy sức sống nhé!  Mong rằng bạn sẽ gặt hái được nhiều thành công trong tương lai và sớm tìm được \"hoàng tử bạch mã\" của mình (mà biết đâu ngay trong lớp mình cũng có ứng cử viên sáng giá đấy ). Chúc bạn luôn vui vẻ và hạnh phúc! ";
                    hover.innerHTML = "K đến Các bạn nữ AK46";
                    break;
                case 22:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Nhân ngày 8/3, chúc bạn luôn vui vẻ, hạnh phúc,xinh đẹp,học giỏi và gặt hái mọi thành công trong cuộc sống.";
                    hover.innerHTML = ".... đến ....";
                    break;
                default:
                    throw new Error("unkown state");
            }
            currentLocation++;
        }
    }

    function goPrevPage() {
        if(currentLocation > 1) {
            switch(currentLocation) {
                case 2:
                    text.style.top = "320px";
                    text.style.fontSize = "30px";
                    text.innerHTML = "Happy Women's Day";
                    hover.innerHTML = "Nhấn mũi tên để thay đổi nội dung";
                    break;
                case 3:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc các bạn nữ 12AK46 \"Trẻ mãi không già nhé <3 ; )) \"";
                    hover.innerHTML = "Bảo Đz đến All";
                    break;
                case 4:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Một người anh em của Trường Xuân Lẫm nói chung anh em mình không còn gì xa lạ nữa những gì tốt đẹp nhất tui cũng chúc cho bạn ở những sự kiện khác nhau rồi, đây chưa phải lời chúc cuối nhưng hi vọng nó thành sự thật, cố gắng thật thành công, vui vẻ, hạnh phúc, làm được nhiều điều mình muốn, sống tốt với bản thân và gia đình. Oke nha lời chúc 8/3 cuối cùng với cương vị là học sinh nhaaa";
                    hover.innerHTML = "Đức Huy đến Diễm My";
                    break;
                case 5:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "lại 1 người anh em Trường Xuân Lẫm của tui, nói chung riêng Phương không muốn nói nhiều. Chúc cho Phương thật thành công, thực hiện được tất cả mong muốn của bản thân, ăn được nhiều hơn những món ăn ưa thích, muốn gì ăn nấy không cần nhìn giáa cố gắng nhaa";
                    hover.innerHTML = "Đức Huy đến Hồng Phương";
                    break;
                case 6:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Riêng fen sẵn đây tui nói luôn 3 năm fen làm bí thư như vậy là quá oke rồi nhờ có fen mà lớp nó cũng nhộn nhịp hơn, tươi hơn, bây giờ đang ở chặn cuối chúc cho fen đỗ vào nguyện vọng 1, thành công trong cuộc sống và sâu xa hơn là công việc, làm được những điều mình muốn và đừng nản dù gặp bất cứ chuyện gì, mong cho fen trong tương lai trở thành phiên bản hoàn hảo nhất của chính mình";
                    hover.innerHTML = "Đức Huy đến Song Thương";
                    break;
                case 7:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Nói dài dòng, liêng thiêng mệt chúc cho bạn tương lai có một cuộc sống như mơ ước, thực hiện được mọi dự định của bản thân, còn về đỗ nguyện vọng 1 blabla tui tin bạn làm được, cố lên hi vọng năm sau họp lớp thấy Ý Nhi dắt anh nào đó đẹp đẹp ngon ngon về chơi nha, nói chung là chúc tất cả, lời chúc 8/3 cuối cùng trên danh nghĩa là học sinh nhaa";
                    hover.innerHTML = "Đức Huy đến Ý Nhi";
                    break;
                case 8:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc cậu 8/3 sống như nữ hoàng, vui tươi, lạc quan yêu đời.<br>Gặp nhiều may mắn trong cuộc sống, đạt được nhiều thành công trên con đường học tập và sự nghiệp.<br>Thực hiện được mọi điều cậu mong ước trong cuộc sống.<br>Nếu thấy cuộc sống mệt mỏi quá thì về bên tui ❤❤❤❤";
                    hover.innerHTML = "Ẩpn davnh đến Tiểu My ❤❤❤";
                    break;
                case 9:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "I love you <3";
                    hover.innerHTML = "ẩn danh đến Tiểu My";
                    break;
                case 10:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cho bạn diễm my có một ngày 8/3 thật vui vẽ và đày hạnh phúc nha";
                    hover.innerHTML = "Ẩn danh đến Dmy";
                    break;
                case 11:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Tên cậu đẹp lắm, nhất định phải có trong giấy trúng tuyển nhé";
                    hover.innerHTML = "Dô danh đến ý nhi";
                    break;
                case 12:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc các bạn sẽ không đẹp nhất nhưng sẽ đẹp nhất trong lòng ai đó .";
                    hover.innerHTML = "Ẩn danh đến Tất cả";
                    break;
                case 13:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cho mn có một ngày 8/3 thật vui vẻ ngày càng xinh đẹp thành công và đạt những thành tích tốt trong thời gian tới đặc biệt là đậu nv1 nhe";
                    hover.innerHTML = "Quốc an đến tất cả các bạn nữ của 12a";
                    break;
                case 14:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cậu 8/3 vui vẻ, đạt được nhiều thành công trong cuộc sống, mong cậu sẽ luôn hạnh phúc với lựa chọn của mình trên con đường mình chọn❤❤";
                    hover.innerHTML = "Ẩn dannh đến Khánh Hà";
                    break;
                case 15:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "I love you, Hà 😘❤";
                    hover.innerHTML = "Ẩn danh đến Khánh Hà";
                    break;
                case 16:
                    text.style.top = "280px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Cảm ơn cậu đã cùng mình đi hết 3 năm cấp 3. Hôm nay 8/3 mình chúc cậu mãi hạnh phúc, nhiều sức khỏe và may mắn, đạt được những mong ước của mình trong tương lai.❤❤❤";
                    hover.innerHTML = "Xuân Vinh đến Huỳnh Trang";
                    break;
                case 17:
                    text.style.top = "280px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc đại ca 8/3 vui vẻ, mãi hạnh phúc, nhiều sức khỏe và may mắn, đạt được những mong ước của mình trong tương lai.♥♥♥";
                    hover.innerHTML = "Xuân Vinh đến Bân Bân";
                    break;
                case 18:
                    text.style.top = "280px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc cậu một ngày 8/3 thật vui vẻ , luôn ngập tràn niềm vui hạnh phúc và yêu thương❤️💐. Dù 8/3 hay bất kì ngày nào đi nữa người đẹp cũng v nha . Và hãy luôn luôn là 1 đoá hoa rực rỡ nhất🌹<br>Và cuối cùng chúc cậu ngày càng xinh gái , học giỏi và đạt được ước mơ , đậu nv1 trong năm nay🍀";
                    hover.innerHTML = "Ẩn Danh đến Song Thương";
                    break;
                case 19:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "8/3 thật vui vẻ , ngày càng học giỏi , đẹp gái , đạt được ước mơ CAND nha";
                    hover.innerHTML = "Ẩn danh đến Hồng Phương";
                    break;
                case 20:
                    text.style.top = "280px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cậu 8/3 đánh nền không mốc , tán má không bết , kẻ mắt 5s , gắn mi nhoay nhoáy và chúc cậu mọi điều tốt đẹp và đỗ và ngành truyền thông mà mình yêu thích";
                    hover.innerHTML = "Ẩn Danh đến Lê Na";
                    break;
                case 21:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "8/3 thật vui vẻ , hạnh phúc , ngày càng xinh đẹp và sớm đạt được ước mơ của mình";
                    hover.innerHTML = "Ẩn Danh đến Diễm My";
                    break;
                case 22:
                    text.style.top = "270px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Nãy dùng hết văn rồi nên giờ chúc công nghiệp tí : chúc các bạn nữa AK-46 luôn xinh tươi,có nhiều niềm vui trong cuộc sống đỗ nguyện vọng 1 và tìm được nửa kia ưng ý của đời mình😘😘😘😘";
                    hover.innerHTML = "Bảo Khang đến Các bạn nữ AK-46";
                    break;
                case 23:
                    text.style.top = "270px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc bạn lúc nào cũng xinh đẹp, rạng rỡ như một bông hoa tràn đầy sức sống nhé!  Mong rằng bạn sẽ gặt hái được nhiều thành công trong tương lai và sớm tìm được \"hoàng tử bạch mã\" của mình (mà biết đâu ngay trong lớp mình cũng có ứng cử viên sáng giá đấy ). Chúc bạn luôn vui vẻ và hạnh phúc! ";
                    hover.innerHTML = "K đến Các bạn nữ AK46";
                    break;
                default:
                    throw new Error("unkown state");
            }
            currentLocation--;
        }
    }
}
