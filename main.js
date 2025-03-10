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
    let numOfPapers = 55;
    let maxLocation = numOfPapers + 1;
    let offset = 0;

    function goNextPage() {
        if(currentLocation < maxLocation) {
            switch(currentLocation) {
                case 0:
                    text.style.top = "320px";
                    text.style.fontSize = "30px";
                    text.innerHTML = "Happy Women's Day";
                    hover.innerHTML = "Nhấn mũi tên để thay đổi nội dung";
                    break;
                case 1:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc các bạn nữ 12AK46 \"Trẻ mãi không già nhé <3 ; )) \"";
                    hover.innerHTML = "#1 Bảo Đz đến All";
                    break;
                case 2:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Một người anh em của Trường Xuân Lẫm nói chung anh em mình không còn gì xa lạ nữa những gì tốt đẹp nhất tui cũng chúc cho bạn ở những sự kiện khác nhau rồi, đây chưa phải lời chúc cuối nhưng hi vọng nó thành sự thật, cố gắng thật thành công, vui vẻ, hạnh phúc, làm được nhiều điều mình muốn, sống tốt với bản thân và gia đình. Oke nha lời chúc 8/3 cuối cùng với cương vị là học sinh nhaaa";
                    hover.innerHTML = "#2 Đức Huy đến Diễm My";
                    break;
                case 3:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "lại 1 người anh em Trường Xuân Lẫm của tui, nói chung riêng Phương không muốn nói nhiều. Chúc cho Phương thật thành công, thực hiện được tất cả mong muốn của bản thân, ăn được nhiều hơn những món ăn ưa thích, muốn gì ăn nấy không cần nhìn giáa cố gắng nhaa";
                    hover.innerHTML = "#3 Đức Huy đến Hồng Phương";
                    break;
                case 4:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Riêng fen sẵn đây tui nói luôn 3 năm fen làm bí thư như vậy là quá oke rồi nhờ có fen mà lớp nó cũng nhộn nhịp hơn, tươi hơn, bây giờ đang ở chặn cuối chúc cho fen đỗ vào nguyện vọng 1, thành công trong cuộc sống và sâu xa hơn là công việc, làm được những điều mình muốn và đừng nản dù gặp bất cứ chuyện gì, mong cho fen trong tương lai trở thành phiên bản hoàn hảo nhất của chính mình";
                    hover.innerHTML = "#4 Đức Huy đến Song Thương";
                    break;
                case 5:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Nói dài dòng, liêng thiêng mệt chúc cho bạn tương lai có một cuộc sống như mơ ước, thực hiện được mọi dự định của bản thân, còn về đỗ nguyện vọng 1 blabla tui tin bạn làm được, cố lên hi vọng năm sau họp lớp thấy Ý Nhi dắt anh nào đó đẹp đẹp ngon ngon về chơi nha, nói chung là chúc tất cả, lời chúc 8/3 cuối cùng trên danh nghĩa là học sinh nhaa";
                    hover.innerHTML = "#5 Đức Huy đến Ý Nhi";
                    break;
                case 6:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc cậu 8/3 sống như nữ hoàng, vui tươi, lạc quan yêu đời.<br>Gặp nhiều may mắn trong cuộc sống, đạt được nhiều thành công trên con đường học tập và sự nghiệp.<br>Thực hiện được mọi điều cậu mong ước trong cuộc sống.<br>Nếu thấy cuộc sống mệt mỏi quá thì về bên tui ❤❤❤❤";
                    hover.innerHTML = "#6 Ẩpn davnh đến Tiểu My ❤❤❤";
                    break;
                case 7:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "I love you <3";
                    hover.innerHTML = "#7 ẩn danh đến Tiểu My";
                    break;
                case 8:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cho bạn diễm my có một ngày 8/3 thật vui vẽ và đày hạnh phúc nha";
                    hover.innerHTML = "#8 Ẩn danh đến Dmy";
                    break;
                case 9:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Tên cậu đẹp lắm, nhất định phải có trong giấy trúng tuyển nhé";
                    hover.innerHTML = "#9 Dô danh đến ý nhi";
                    break;
                case 10:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc các bạn sẽ không đẹp nhất nhưng sẽ đẹp nhất trong lòng ai đó .";
                    hover.innerHTML = "#10 Ẩn danh đến Tất cả";
                    break;
                case 11:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cho mn có một ngày 8/3 thật vui vẻ ngày càng xinh đẹp thành công và đạt những thành tích tốt trong thời gian tới đặc biệt là đậu nv1 nhe";
                    hover.innerHTML = "#11 Quốc an đến tất cả các bạn nữ của 12a";
                    break;
                case 12:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cậu 8/3 vui vẻ, đạt được nhiều thành công trong cuộc sống, mong cậu sẽ luôn hạnh phúc với lựa chọn của mình trên con đường mình chọn❤❤";
                    hover.innerHTML = "#12 Ẩn dannh đến Khánh Hà";
                    break;
                case 13:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "I love you, Hà 😘❤";
                    hover.innerHTML = "#13 Ẩn danh đến Khánh Hà";
                    break;
                case 14:
                    text.style.top = "280px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Cảm ơn cậu đã cùng mình đi hết 3 năm cấp 3. Hôm nay 8/3 mình chúc cậu mãi hạnh phúc, nhiều sức khỏe và may mắn, đạt được những mong ước của mình trong tương lai.❤❤❤";
                    hover.innerHTML = "#14 Xuân Vinh đến Huỳnh Trang";
                    break;
                case 15:
                    text.style.top = "280px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc đại ca 8/3 vui vẻ, mãi hạnh phúc, nhiều sức khỏe và may mắn, đạt được những mong ước của mình trong tương lai.♥♥♥";
                    hover.innerHTML = "#15 Xuân Vinh đến Bân Bân";
                    break;
                case 16:
                    text.style.top = "280px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc cậu một ngày 8/3 thật vui vẻ , luôn ngập tràn niềm vui hạnh phúc và yêu thương❤️💐. Dù 8/3 hay bất kì ngày nào đi nữa người đẹp cũng v nha . Và hãy luôn luôn là 1 đoá hoa rực rỡ nhất🌹<br>Và cuối cùng chúc cậu ngày càng xinh gái , học giỏi và đạt được ước mơ , đậu nv1 trong năm nay🍀";
                    hover.innerHTML = "#16 Ẩn Danh đến Song Thương";
                    break;
                case 17:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "8/3 thật vui vẻ , ngày càng học giỏi , đẹp gái , đạt được ước mơ CAND nha";
                    hover.innerHTML = "#17 Ẩn danh đến Hồng Phương";
                    break;
                case 18:
                    text.style.top = "280px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cậu 8/3 đánh nền không mốc , tán má không bết , kẻ mắt 5s , gắn mi nhoay nhoáy và chúc cậu mọi điều tốt đẹp và đỗ và ngành truyền thông mà mình yêu thích";
                    hover.innerHTML = "#18 Ẩn Danh đến Lê Na";
                    break;
                case 19:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "8/3 thật vui vẻ , hạnh phúc , ngày càng xinh đẹp và sớm đạt được ước mơ của mình";
                    hover.innerHTML = "#19 Ẩn Danh đến Diễm My";
                    break;
                case 20:
                    text.style.top = "270px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Nãy dùng hết văn rồi nên giờ chúc công nghiệp tí : chúc các bạn nữa AK-46 luôn xinh tươi,có nhiều niềm vui trong cuộc sống đỗ nguyện vọng 1 và tìm được nửa kia ưng ý của đời mình😘😘😘😘";
                    hover.innerHTML = "#20 Bảo Khang đến Các bạn nữ AK-46";
                    break;
                case 21:
                    text.style.top = "270px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc bạn lúc nào cũng xinh đẹp, rạng rỡ như một bông hoa tràn đầy sức sống nhé!  Mong rằng bạn sẽ gặt hái được nhiều thành công trong tương lai và sớm tìm được \"hoàng tử bạch mã\" của mình (mà biết đâu ngay trong lớp mình cũng có ứng cử viên sáng giá đấy ). Chúc bạn luôn vui vẻ và hạnh phúc! ";
                    hover.innerHTML = "#21 K đến Các bạn nữ AK46";
                    break;
                case 22:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Nhân ngày 8/3, chúc bạn luôn vui vẻ, hạnh phúc,xinh đẹp,học giỏi và gặt hái mọi thành công trong cuộc sống.";
                    hover.innerHTML = "#22 .... đến ....";
                    break;
                case 23:
                    text.style.top = "270px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Vào năm lớp 10 và 11 mình ko thích lớp 1 phần là do mình học dở quá nên sinh ra ganh tị khi lên 12 mình nghĩ lại nếu hồi đó ko ghét mn thì có lẽ mình sẽ có nhiều kỉ niệm hơn, giờ mình chỉ ước mình quay lại lớp 10 để sửa sai thôi, mình xin lỗi và cảm ơn các bạn và cũng như mong các bạn giúp đỡ";
                    hover.innerHTML = "#23 Ẩn danh: Cảm ơn và xin lỗi";
                    break;
                case 24:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc cho tất cả các bạn nữ 12A có một 8/3 thật ý nghĩa, đầy niềm vui và hạnh phúc năm nay năm cuối rồi hi vọng các bạn thích món quà của các bạn nam, nó không mang giá trị vật chất quá lớn nhưng đều là tấm lòng của 23 chàng trai đặt trong đó, sau này buồn buồn lấy ra  xem rồi nhớ tới ngày hôm nay nha. Nói được vậy thôi chứ bí văn rồi mong cho mọi điều tốt đẹp đến với các bạn";
                    hover.innerHTML = "#24 Đức Huy đến tất cả các bạn nữ";
                    break;
                case 25:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Yêu các bạn nữ nhiều lắm 😍😍😍😍";
                    hover.innerHTML = "#25 Ẩn danh đến Tập thể";
                    break;
                case 26:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Vậy là cũng đã thấm thoát 3 năm cấp ba rồi nhỉ... Cuối cấp rồi mình cũng chúc 🐼 luôn vui vẻ, hạnh phúc trong cuộc sống, đạt được nhiều thành công và đỗ vào trường mà bản thân mong muốn nhaa. Và nhớ là luôn giữ gìn sức khỏe và đừng cố thức khuya quá ko thì thành 🐼 thật á:)))";
                    hover.innerHTML = "#26 :) đến 🐼";
                    break;
                case 27: // 28 0
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "tui thì chả văn vở được nhiêu, cũng chả giỏi ăn nói những lời hoa mỹ. Nhưng nhân dịp này thì tui cũng chỉ muốn chúc chị em luôn vui vẻ, hạnh phúc và thành công. Hãy không ngừng cố gắng trên con đường mình đã chọn. Nếu gặp khó khăn hay chán nản, cứ nhớ lời lớp trưởng: cứ thử, không được cái này thì thử cái khác, cứ thử đến khi nào thành công. Thời gian trôi nhanh, nhưng cũng đủ chậm để ta cố gắng và đạt được điều mình mong muốn.";
                    hover.innerHTML = "#27 ẩn danh đến 21 bông hồng";
                    break;
                case 28:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    if (offset === 0) { //28 1
                        offset++;
                        currentLocation--;
                        text.innerHTML = "🍂Năm học cuối cùng đã trôi qua nhanh hơn chúng ta tưởng. Nhìn lại chặng đường đã đi cùng nhau, có quá nhiều kỷ niệm đáng nhớ, nhưng điều đặc biệt nhất chính là tình bạn mà chúng ta đã xây dựng.<br>Đọc tới đây chắc hẳn các em sẽ đặt câu hỏi là:<br>\" thằng nào đây dãy bay?\". ";
                        hover.innerHTML = "#28.1 \"Anh\"  đến Tập thể";
                    } else if (offset === 1) { // 28 2
                        offset++;
                        currentLocation--;
                        text.innerHTML = "Chắc có lẽ các em không để ý “Anh” là một người chưa từng gọi bất kỳ bạn nữ nào trong AK46 là \"mày\", không phải vì khoảng cách hay xa lạ, mà vì trong mắt a các e luôn là những bông hoa cần được che chở, các “em”luôn xứng đáng được trân trọng, Mỗi người trong lớp đều là một mảnh ghép quan trọng, là những cô gái dthuong+đáng yêu.🥰";
                        hover.innerHTML = "#28.2 \"Anh\"  đến Tập thể";
                    } else if (offset === 2) { // 28 3
                        offset++;
                        currentLocation--;
                        text.innerHTML = "Các em có biết không? Sự có mặt của các em đã làm cho những ngày tháng học sinh của anh trở nên ý nghĩa hơn, đó là phần kí ức thanh xuân tươi đẹp của anh.Mà sao cũng lạ hơ? Con gái nói gì trước là đánh một cái rồi mới nói dãy hả? Sau này chắc anh nhớ lắm những cái tát, nhéo, đánh của các em - tất cả đều là những khoảnh khắc mà sau này, khi ngoảnh lại, chắc a sẽ mếu 🥲.";
                        hover.innerHTML = "#28.3 \"Anh\"  đến Tập thể";
                    } else if (offset === 3) { // 28 4
                        offset++;
                        currentLocation--;
                        text.innerHTML = "Thời gian trôi qua nhanh quá, chẳng mấy chốc mà chúng ta sẽ phải nói lời tạm biệt😕.Nhưng dù có đi đâu, làm gì, mong rằng chúng ta vẫn sẽ luôn nhớ về nhau với những kỷ niệm đẹp nhất.";
                        hover.innerHTML = "#28.4 \"Anh\"  đến Tập thể";
                    } else if (offset === 4) { // 29 0
                        offset = 0;
                        text.innerHTML = "🌹Chúc các em luôn mạnh mẽ, tự tin và hạnh phúc. Chúc những ước mơ của các em sẽ sớm thành hiện thực. Dù cuộc sống có khó khăn thế nào, hãy luôn tin rằng phía trước vẫn có ánh sáng, phía sau vẫn còn có “Anh”😎<br>Gửi 21 công chúa ngoan xinh yêu 🫶 ";
                        hover.innerHTML = "#28.5 \"Anh\"  đến Tập thể";
                    }
                    break;
                case 29: // 30 
                    text.style.top = "250px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "chúc mấy bạn 8/3 hạnh phúc, học giỏi hơn nữa và ngày càng xin ẹp hơn nhaaaaa :3 <br>&lt bạn nào tương lai có bị bồ đá hay chồng bỏ thi ib tuiii ngày 4 bữa :v &gt<br>(53+17)";
                    hover.innerHTML = "#29 ẩn danh siêuuu đẹp traiiiii đến tất cả";
                    break;
                case 30:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Mong rằng những điều tốt đẹp nhất sẽ đến với các bạn ❤️";
                    hover.innerHTML = "#30 Đăng đến Các bạn nữ 12A";
                    break;
                case 31:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "8/3 chúc Nhi ngày càng học giỏi , xinh gái , luôn luôn hạnh phúc và đậu nv 1 nha . Vs kiếm đc anh nào nha🤣🥳";
                    hover.innerHTML = "#31 Ẩn danh đến Nhi";
                    break;
                case 32:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "8/3 chúc m luôn vui vẻ , hạnh phúc tràn đầy năng lượng , luôm xinh gái và học giỏi để đỗ nv1 năm nay nha🥳";
                    hover.innerHTML = "#32 Ẩn danh đến Duyên";
                    break;
                case 33:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "8/3 chúc m luôn vui vẻ , yêu đời , hạnh phúc , luôn xinh gái , học giỏi và thành công đỗ nv1 nha🥳";
                    hover.innerHTML = "#33 Ẩn danh đến Trân";
                    break;
                case 34:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc các bạn có một ngày 8/3 thật vui , sôi động và tràn đầy hạnh phúc. Mong rằng sau khi chúng ta lớn sẽ không ai quên đi những ngày tháng tươi đẹp bên nhau mà mọi người đã chung tay tô vẽ ra nó. Hãy luôn nở nụ cười trên môi nhé. Các Em Gái Xinh Đẹp của Anh Thắng 😘🥰";
                    hover.innerHTML = "#34 Anh Thắng đến các Bạn nữ trong Lớp 12A 🥰";
                    break;
                case 35:
                    text.style.top = "230px";
                    text.style.fontSize = "16px";
                    text.innerHTML = "Ấn tượng của mình về bạn là một con người hiền lành,ít nói.Lúc đầu nhắn tin bạn hay hỏi “Ăn cơm chưa” và mình thấy cũng hơi vô vị một xíu.Khi dần tiếp xúc và chơi với nhau thì mình cũng hiểu rõ hơn về bạn.Có lẽ là tính bạn hơi nhút nhát so với mọi người nhưng cho đến ngày hôm nay mình thấy bạn cũng đã thay đổi rất nhiều.Từ cách ăn nói đến giao tiếp mọi thứ bạn đều thể hiện tốt hơn.Mình muốn thấy bạn trong bộ dáng vui vẻ như hiện tại và hi vọng những tháng còn lại bạn sẽ vui hơn thế nữa.Cuối cùng là chúc bạn đỗ được ngôi trường và chọn được ngành nghề mình yêu thích.";
                    hover.innerHTML = "#35 Ẩn danh đến Quyên";
                    break;
                case 36:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Như là một bông hoa,mình thấy được trong bạn một sự nhẹ nhàng và chân thành.Khi chơi và nói chuyện với nhau mình thấy bạn rất là dễ thương và thân thiện.Tuy chưa ngồi chung với nhau nhưng mình mình cũng rất mến bạn. Mình cũng cho bạn sẽ mãi lạc quan,vui tươi nhứ hiện tại và tương lai sẽ hoàn thành được giấc mơ của riêng mình.Hẹn bạn một cuộc đi chơi mùa hè này nha.";
                    hover.innerHTML = "36 Ẩn danh đến Hoa Quỳnh";
                    break;
                case 37:
                    text.style.top = "230px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Gửi bạn bí thư của AK46,3 năm qua mình cũng không nhớ là đã thân từ lúc nào.Nhưng chắc có lẽ là những cuộc gặp gỡ đầu tiên,nói chuyện với nhau cùng nhau đi chơi và nhiều thứ khác nữa.Lúc biết bạn là con giáo viên thì mình hơi wow và nghĩ bạn sẽ ngoan nhưng chắc mình đã lầm.Nhưng mình cũng rất mến bạn bởi sự nhiệt tình và năng lượng tích cực.Đúng là có lúc con người ta sẽ buồn,sẽ tức giận nhưng chúng ta nên giữ cho mình một trái tim ấm áp.Hi vọng rằng bạn của sau này vẫn vui tươi như hiện tại.";
                    hover.innerHTML = "#37 Ẩn danh đến Thương";
                    break;
                case 38:
                    text.style.top = "220px";
                    text.style.fontSize = "16px";
                    text.innerHTML = "Lúc có danh sách lớp thì mình đã khá ấn tượng với bạn vì những thành tích bạn đạt được.Và qua ba năm bạn lại càng tỏa sáng hơn.Lúc bạn nói chuyện mình thấy bạn nói chuyện cũng không hề văn vẻ như lúc bạn viết.Bạn có những ý tưởng và tâm hồn nghệ thuật rất cao.Từ những sản phẩm nho nhỏ đến to lớn.Từ những thước phim nhỏ lẻ hay những những bài dự án của tổ cho đến những hoạt động sôi nổi qua đợt cắm trại lớp 10.Bạn rất giỏi và cũng rất năng động đôi lúc có hơi cọc cằn nhưng điều đó cũng làm bạn trở nên nổi bật.Mai kia lớn lên mình muốn thấy bạn tỏa sáng với những ý tưởng của mình.Và mình cũng chúc bạn sẽ thành công trong sự nghiệp của mình.";
                    hover.innerHTML = "#38 Ẩn danh đến Na";
                    break;
                case 39:
                    text.style.top = "260px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Ấn tượng của bạn với mọi người chắc có lẽ là sự cá tính,mình thấy được năng lượng và sự tự tin từ bạn.Bạn cũng có một vốn hiểu biết rất tốt và bạn cũng rất giỏi.Và hi vọng rằng bạn sẽ đạt được những điều mà bạn mong muốn.";
                    hover.innerHTML = "#39 Ẩn danh đến Thy";
                    break;
                case 40:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Trông bạn lúc đầu có vẻ hơi nhút nhát và trầm tính,nhưng mình thấy có đôi lúc bạn cũng rất nhiệt tình.Mình thấy được sự châm chỉ và tỉ mỉ của bạn qua từng trang giấy.Bạn dùng bút chì để ghi chép và điều đó từng làm mình thấy thắc mắc.Hi vọng rằng sự tỉ mỉ và chăm chỉ ấy sẽ đem lại cho bạn trái ngọt trong những kì thi sắp tới.";
                    hover.innerHTML = "#40 Ẩn danh đến Hà";
                    break;
                case 41:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Cô gái với niềm đam mê sư phạm.Học chung 3 năm nhưng mình chưa từng thấy bạn lên thuyết trình lần nào và mình cũng muốn gửi đến bạn một sự tích cực rằng hãy thử sức với nhiều điều mới để càng trở nên hoàn thiện hơn.Chúc bạn sẽ có một kết quả thật tốt trong những kì thi và tương lai có thể trở thành một cô giáo như bạn từng mong muốn.";
                    hover.innerHTML = "#41 Ẩn danh đến Nhân";
                    break;
                case 42:
                    text.style.top = "225px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Ban đầu có vẻ bạn hơi thu mình với lớp và cũng không mấy nổi bật và cũng có thể nói là mờ nhạt.Nhưng trong những năm lớp 10,11 mình cũng thấy bạn nổ lực rất nhiều nhưng có lẽ kết quả cũng chưa mỉm cười với bạn.Cho tới năm nay mình thật sự cảm thấy bạn đã vươn lên một cách vượt trội.Mình nghĩ đó cũng chính là thành quả mà nổ lực của bạn đã bỏ ra.Mình chúc bạn sẽ đạt được nhiều điều hơn nữa trong tương lai và cũng hi vọng rằng có thể nghe bạn trình bày trọn vẹn những chia sẻ của bạn vào đợt kỉ yếu.";
                    hover.innerHTML = "#42 Ẩn danh đến Thảo";
                    break;
                case 43:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Là một bạn nữ chuyển lớp bạn trông có vẻ tinh nghịch và năng động.Bạn có một sự ngoại giao tốt khi có thể làm quen được nhiều người trong một khoảng thời gian ngắn.Mình thấy bạn trông rất xinh xắn khi chụp ảnh và cũng rất là năng lượng.Hi vọng ngọn lửa đang cháy trong tim bạn sẽ không bao giờ tắt.";
                    hover.innerHTML = "#43 Ẩn danh đến Âu";
                    break;
                case 44:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Gửi cô gái tràn đầy năng lượng,bạn là một người dễ gần và cũng rất là vui vẻ.Từ cách nói chuyện đến cách vui chơi đều vậy.Bạn cũng rất dễ thương và cũng có một tí nét hiện đại.Về tính cách mình thấy bạn rất nhiệt tình với mọi người nên mình cũng thấy được sự quý mến mà các bạn khác dành cho bạn.Chúc bạn sẽ vẫn sẽ giữ được những nét tính cách và cũng chúc bạn đạt được nguyện vọng của mình.";
                    hover.innerHTML = "#44 Ẩn danh đến Suga";
                    break;
                case 45:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Gửi một bạn mà mình cũng rất ngưỡng mộ.Bạn là một người luôn đem lại cho người khác cảm giác gần gũi và thân quen.Nhưng có vẻ bạn vẫn chưa tự tin về bản thân mình lắm.Mình chỉ muốn nói rằng bạn rất giỏi và hãy tự hào vì điều đó.Và chúc bạn sẽ gặt hái được thật nhiều thành quả trong những kì thi sắp tới.Hi vọng sẽ thấy bạn lên đọc bài phát biểu với cương vị là thủ khoa kì thi tốt nghiệp của trường chúng ta.";
                    hover.innerHTML = "#45 Ẩn danh đến Như Quỳnh";
                    break;
                case 46:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Hôm qua đi chơi mình thấy bạn cười rất nhiều và vì có lí do nên bạn phải về sớm nhưng hi vọng buổi sáng ấy sẽ vẫn để lại cho bạn một ấn tượng đặc biệt.Từ những món quà,lời chúc,từng nét vẽ chúng mình cũng đã dành ra những tâm huyết để gửi đến các bạn.Có thể bạn ít nói cũng khi thể hiện cảm xúc với lớp nhưng mình chỉ muốn chia sẻ rằng lúc bạn cười cũng rất dễ thương vì vậy nên hi vọng bạn sẽ vui cười nhiều hơn với lớp chúng ta.";
                    hover.innerHTML = "#46 Ẩn danh đến Bân";
                    break;
                case 47:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Mình cũng biết bạn từ trước khi vào lớp 10.Cho đến những buổi học đầu tiên mình cực kì ấn tượng với khả năng phát âm của bạn.Và không dừng lại ở đó bạn vẫn luôn biết cách làm mình trở nên nổi bật và theo cảm nhận của mình bạn rất toàn diện.Mọi thứ bạn đều ổn và tốt nhưng bạn vẫn giao tiếp với mọi người rất bình thường.Và mình cũng chúc cho bạn đạt được nhiều thành công trên con đường sự nghiệp của bạn.";
                    hover.innerHTML = "#47 Ẩn danh đến Nhi";
                    break;
                case 48:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Một cô gái tự lập là điều mình rất vấn tượng về bạn.Nhưng mình biết để có được những thành quả như bây giờ bạn cũng đã nổ lực rất nhiều.Tuy không biết lựa chọn trong tương lai của bạn như thế nào nhưng mình cũng chúc cho bạn thành công với sự lựa đó của mình.";
                    hover.innerHTML = "#48 Ẩn danh đến Trúc";
                    break;
                case 49:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Gửi bạn tomboy của lớp chúng ta,mình thấy bạn là một người cũng khá giản dị.Mình ấn tượng về bạn là một người thường đối diện với mọi thứ một cách điềm tĩnh mà không hề ít cáu gắt.Có lẽ điều đó đã làm bạn trở nên đặc biệt.Mình xin gửi đến cô nàng với mái tóc tém rất dễ thương của lớp chúng ta một sự tích cực cho tương lai của bạn(Mình thấy bạn để tóc dài cũng xinh lắm)";
                    hover.innerHTML = "#49 Ẩn danh đến Diễm My";
                    break;
                case 50:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Tuy bạn có một chiều cao khá hạn chế nhưng trong những lần xem bạn đánh bóng chuyền thì trông bạn rất là lực luôn.Mình thấy năm nay bạn học cũng giỏi lắm nè,chăm chỉ hơn nữa.Bạn cũng rất dễ thương nha.Chúc bạn đạt được những thành tốt trong những kì thi sắp tới.";
                    hover.innerHTML = "#50 Ẩn danh đến Trân";
                    break;
                case 51:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Đối với mình bạn là một cô gái thú vị,có thể là do cách nói chuyện hoặc cũng có thể là do mình thấy thế.Đôi lúc bạn cũng trông rất ngầu nhưng mà hơi ít cái đôi lúc quá.Nhưng mà cũng chính sự hài hước đó đã để cho mình một ấn tượng rất tốt về bạn.Chúc bạn đạt được ước mơ thành công an của mình.";
                    hover.innerHTML = "#51 Ẩn danh đến Phương";
                    break;
                case 52:
                    text.style.top = "220px";
                    text.style.fontSize = "16px";
                    text.innerHTML = "Vào đầu năm lớp 10,bạn luôn mang khẩu trang bên mình dù cho ở trong lớp và rất ít khi tháo ra.Mình cũng không biết lí do tại sao nhưng qua 3 năm thì chiếc khẩu trang ấy cũng không còn.Bạn cũng trông dễ thương hơn.Mình thấy bạn có vẻ ít nói và cũng rất ít tiếp xúc với mọi người nhưng mình cũng hiểu phần nào lí do của bạn.Hôm qua khi đi chơi cùng lớp thì mình thấy bạn cũng rất vui tính nhưng vẫn còn hơi xa cách với mọi người.Trong những tháng còn lại mình muốn thấy một Trang hòa đồng với mọi người và tươi cười lên nhiều hơn nữa.Và hi vọng rằng bạn sẽ không cảm thấy ngại khi nói chuyện với mọi người cũng như hãy sống thoải mái như thể chúng ta là một gia đình.";
                    hover.innerHTML = "#52 Ẩn danh đến Trang";
                    break;
                case 53:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Gửi cô gái nhỏ nhắn,nhiệt tình của lớp.Qua 3 năm học với nhau mình thấy được sự năng nổ của bạn trong từng tiết học.Sự cố gắng của bạn qua từng ngày tháng cũng dần được đền đáp.Và mình cảm nhận được sự chân chất đâu đó trong một con người miền núi.Sự nhiệt tình của bạn là điều mình rất trân quý.Và cũng hi vọng rằng bạn sẽ gặt hái được kết quả tốt trong kì thi sắp tới.Và hãy nhớ rằng sức mạnh tiềm ẩn của bạn lớn hơn thân hình bạn rất nhiều.";
                    hover.innerHTML = "#53 Ẩn danh đến Yến";
                    break;
                case 54:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Giọng nói của bạn rất nhẹ nhàng,mình cảm nhận được bạn là một người sâu lắng.Và bạn có vẻ cũng là người không thích vội vàng cho lắm.Và mình cảm nhận được đâu đó trong bạn vẫn có một nét gì đó rất riêng... Không biết bạn có dự đinhn như thế nào cho tương lai nên mình chỉ chúc cho bạn sẽ có được kết quả như mình kì vọng.";
                    hover.innerHTML = "#54 Ẩn danh đến Duyên";
                    break;
                case 55:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Bạn là một cô gái rất dịu dàng,từ tính cách đến lời nói mọi thứ đều rất tĩnh lặng.Tuy bạn cũng không nổi bật như những bạn khác nhưng mình thấy được sự ấm áp của bạn qua nhiều hành động.Bạn thường đứng sau mọi người để quan sát và điều ấy có thể khiến bạn trở nên bị lu mờ.Và mình hi vọng rằng bạn sẽ tự tin hơn trong việc kết nối cùng mọi người hơn nữa.Chúc bạn mãi giữ được những nét đẹp nhẹ nhàng ấy và đừng để đánh mất nó.";
                    hover.innerHTML = "#55 Ẩn danh đến Tiểu My";
                    break;
                default:
                    throw new Error("unkown state");
            }
            currentLocation++;
        }
    }

    function goPrevPage() {
        if(currentLocation > 1) {
            if (currentLocation === 30) {
                currentLocation = 29;
                offset = 0
                text.style.top = "250px";
                text.style.fontSize = "18px";
                text.innerHTML = "🌹Chúc các em luôn mạnh mẽ, tự tin và hạnh phúc. Chúc những ước mơ của các em sẽ sớm thành hiện thực. Dù cuộc sống có khó khăn thế nào, hãy luôn tin rằng phía trước vẫn có ánh sáng, phía sau vẫn còn có “Anh”😎<br>Gửi 21 công chúa ngoan xinh yêu 🫶 ";
                hover.innerHTML = "#28.5 \"Anh\"  đến Tập thể";
                return;
            }
            if (currentLocation === 29) {
                currentLocation = 28;
                offset = 4;
                text.style.top = "250px";
                text.style.fontSize = "18px";
                text.innerHTML = "Thời gian trôi qua nhanh quá, chẳng mấy chốc mà chúng ta sẽ phải nói lời tạm biệt😕.Nhưng dù có đi đâu, làm gì, mong rằng chúng ta vẫn sẽ luôn nhớ về nhau với những kỷ niệm đẹp nhất.";
                hover.innerHTML = "#28.4 \"Anh\"  đến Tập thể";
                return;
            }
            if (currentLocation === 28 && offset === 4) {
                currentLocation = 28;
                offset = 3;
                text.style.top = "250px";
                text.style.fontSize = "18px";
                text.innerHTML = "Các em có biết không? Sự có mặt của các em đã làm cho những ngày tháng học sinh của anh trở nên ý nghĩa hơn, đó là phần kí ức thanh xuân tươi đẹp của anh.Mà sao cũng lạ hơ? Con gái nói gì trước là đánh một cái rồi mới nói dãy hả? Sau này chắc anh nhớ lắm những cái tát, nhéo, đánh của các em - tất cả đều là những khoảnh khắc mà sau này, khi ngoảnh lại, chắc a sẽ mếu 🥲.";
                hover.innerHTML = "#28.3 \"Anh\"  đến Tập thể";
                return;
            }
            if (currentLocation === 28 && offset === 3) {
                currentLocation = 28;
                offset = 2;
                text.style.top = "250px";
                text.style.fontSize = "18px";
                text.innerHTML = "Chắc có lẽ các em không để ý “Anh” là một người chưa từng gọi bất kỳ bạn nữ nào trong AK46 là \"mày\", không phải vì khoảng cách hay xa lạ, mà vì trong mắt a các e luôn là những bông hoa cần được che chở, các “em”luôn xứng đáng được trân trọng, Mỗi người trong lớp đều là một mảnh ghép quan trọng, là những cô gái dthuong+đáng yêu.🥰";
                hover.innerHTML = "#28.2 \"Anh\"  đến Tập thể";
                return;
            }
            if (currentLocation === 28 && offset === 2) {
                currentLocation = 28;
                offset = 1;
                text.style.top = "250px";
                text.style.fontSize = "18px";
                text.innerHTML = "🍂Năm học cuối cùng đã trôi qua nhanh hơn chúng ta tưởng. Nhìn lại chặng đường đã đi cùng nhau, có quá nhiều kỷ niệm đáng nhớ, nhưng điều đặc biệt nhất chính là tình bạn mà chúng ta đã xây dựng.<br>Đọc tới đây chắc hẳn các em sẽ đặt câu hỏi là:<br>\" thằng nào đây dãy bay?\". ";
                hover.innerHTML = "#28.1 \"Anh\"  đến Tập thể";
                return;
            }
            if (currentLocation === 28 && offset === 1) {
                currentLocation = 28;
                offset = 0;
                text.style.top = "250px";
                text.style.fontSize = "18px";
                text.innerHTML = "tui thì chả văn vở được nhiêu, cũng chả giỏi ăn nói những lời hoa mỹ. Nhưng nhân dịp này thì tui cũng chỉ muốn chúc chị em luôn vui vẻ, hạnh phúc và thành công. Hãy không ngừng cố gắng trên con đường mình đã chọn. Nếu gặp khó khăn hay chán nản, cứ nhớ lời lớp trưởng: cứ thử, không được cái này thì thử cái khác, cứ thử đến khi nào thành công. Thời gian trôi nhanh, nhưng cũng đủ chậm để ta cố gắng và đạt được điều mình mong muốn.";
                hover.innerHTML = "#27 ẩn danh đến 21 bông hồng";
                return;
            }
            switch(currentLocation-2) {
                case 0:
                    text.style.top = "320px";
                    text.style.fontSize = "30px";
                    text.innerHTML = "Happy Women's Day";
                    hover.innerHTML = "Nhấn mũi tên để thay đổi nội dung";
                    break;
                case 1:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc các bạn nữ 12AK46 \"Trẻ mãi không già nhé <3 ; )) \"";
                    hover.innerHTML = "#1 Bảo Đz đến All";
                    break;
                case 2:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Một người anh em của Trường Xuân Lẫm nói chung anh em mình không còn gì xa lạ nữa những gì tốt đẹp nhất tui cũng chúc cho bạn ở những sự kiện khác nhau rồi, đây chưa phải lời chúc cuối nhưng hi vọng nó thành sự thật, cố gắng thật thành công, vui vẻ, hạnh phúc, làm được nhiều điều mình muốn, sống tốt với bản thân và gia đình. Oke nha lời chúc 8/3 cuối cùng với cương vị là học sinh nhaaa";
                    hover.innerHTML = "#2 Đức Huy đến Diễm My";
                    break;
                case 3:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "lại 1 người anh em Trường Xuân Lẫm của tui, nói chung riêng Phương không muốn nói nhiều. Chúc cho Phương thật thành công, thực hiện được tất cả mong muốn của bản thân, ăn được nhiều hơn những món ăn ưa thích, muốn gì ăn nấy không cần nhìn giáa cố gắng nhaa";
                    hover.innerHTML = "#3 Đức Huy đến Hồng Phương";
                    break;
                case 4:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Riêng fen sẵn đây tui nói luôn 3 năm fen làm bí thư như vậy là quá oke rồi nhờ có fen mà lớp nó cũng nhộn nhịp hơn, tươi hơn, bây giờ đang ở chặn cuối chúc cho fen đỗ vào nguyện vọng 1, thành công trong cuộc sống và sâu xa hơn là công việc, làm được những điều mình muốn và đừng nản dù gặp bất cứ chuyện gì, mong cho fen trong tương lai trở thành phiên bản hoàn hảo nhất của chính mình";
                    hover.innerHTML = "#4 Đức Huy đến Song Thương";
                    break;
                case 5:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Nói dài dòng, liêng thiêng mệt chúc cho bạn tương lai có một cuộc sống như mơ ước, thực hiện được mọi dự định của bản thân, còn về đỗ nguyện vọng 1 blabla tui tin bạn làm được, cố lên hi vọng năm sau họp lớp thấy Ý Nhi dắt anh nào đó đẹp đẹp ngon ngon về chơi nha, nói chung là chúc tất cả, lời chúc 8/3 cuối cùng trên danh nghĩa là học sinh nhaa";
                    hover.innerHTML = "#5 Đức Huy đến Ý Nhi";
                    break;
                case 6:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc cậu 8/3 sống như nữ hoàng, vui tươi, lạc quan yêu đời.<br>Gặp nhiều may mắn trong cuộc sống, đạt được nhiều thành công trên con đường học tập và sự nghiệp.<br>Thực hiện được mọi điều cậu mong ước trong cuộc sống.<br>Nếu thấy cuộc sống mệt mỏi quá thì về bên tui ❤❤❤❤";
                    hover.innerHTML = "#6 Ẩpn davnh đến Tiểu My ❤❤❤";
                    break;
                case 7:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "I love you <3";
                    hover.innerHTML = "#7 ẩn danh đến Tiểu My";
                    break;
                case 8:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cho bạn diễm my có một ngày 8/3 thật vui vẽ và đày hạnh phúc nha";
                    hover.innerHTML = "#8 Ẩn danh đến Dmy";
                    break;
                case 9:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Tên cậu đẹp lắm, nhất định phải có trong giấy trúng tuyển nhé";
                    hover.innerHTML = "#9 Dô danh đến ý nhi";
                    break;
                case 10:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc các bạn sẽ không đẹp nhất nhưng sẽ đẹp nhất trong lòng ai đó .";
                    hover.innerHTML = "#10 Ẩn danh đến Tất cả";
                    break;
                case 11:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cho mn có một ngày 8/3 thật vui vẻ ngày càng xinh đẹp thành công và đạt những thành tích tốt trong thời gian tới đặc biệt là đậu nv1 nhe";
                    hover.innerHTML = "#11 Quốc an đến tất cả các bạn nữ của 12a";
                    break;
                case 12:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cậu 8/3 vui vẻ, đạt được nhiều thành công trong cuộc sống, mong cậu sẽ luôn hạnh phúc với lựa chọn của mình trên con đường mình chọn❤❤";
                    hover.innerHTML = "#12 Ẩn dannh đến Khánh Hà";
                    break;
                case 13:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "I love you, Hà 😘❤";
                    hover.innerHTML = "#13 Ẩn danh đến Khánh Hà";
                    break;
                case 14:
                    text.style.top = "280px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Cảm ơn cậu đã cùng mình đi hết 3 năm cấp 3. Hôm nay 8/3 mình chúc cậu mãi hạnh phúc, nhiều sức khỏe và may mắn, đạt được những mong ước của mình trong tương lai.❤❤❤";
                    hover.innerHTML = "#14 Xuân Vinh đến Huỳnh Trang";
                    break;
                case 15:
                    text.style.top = "280px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc đại ca 8/3 vui vẻ, mãi hạnh phúc, nhiều sức khỏe và may mắn, đạt được những mong ước của mình trong tương lai.♥♥♥";
                    hover.innerHTML = "#15 Xuân Vinh đến Bân Bân";
                    break;
                case 16:
                    text.style.top = "280px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc cậu một ngày 8/3 thật vui vẻ , luôn ngập tràn niềm vui hạnh phúc và yêu thương❤️💐. Dù 8/3 hay bất kì ngày nào đi nữa người đẹp cũng v nha . Và hãy luôn luôn là 1 đoá hoa rực rỡ nhất🌹<br>Và cuối cùng chúc cậu ngày càng xinh gái , học giỏi và đạt được ước mơ , đậu nv1 trong năm nay🍀";
                    hover.innerHTML = "#16 Ẩn Danh đến Song Thương";
                    break;
                case 17:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "8/3 thật vui vẻ , ngày càng học giỏi , đẹp gái , đạt được ước mơ CAND nha";
                    hover.innerHTML = "#17 Ẩn danh đến Hồng Phương";
                    break;
                case 18:
                    text.style.top = "280px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Chúc cậu 8/3 đánh nền không mốc , tán má không bết , kẻ mắt 5s , gắn mi nhoay nhoáy và chúc cậu mọi điều tốt đẹp và đỗ và ngành truyền thông mà mình yêu thích";
                    hover.innerHTML = "#18 Ẩn Danh đến Lê Na";
                    break;
                case 19:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "8/3 thật vui vẻ , hạnh phúc , ngày càng xinh đẹp và sớm đạt được ước mơ của mình";
                    hover.innerHTML = "#19 Ẩn Danh đến Diễm My";
                    break;
                case 20:
                    text.style.top = "270px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Nãy dùng hết văn rồi nên giờ chúc công nghiệp tí : chúc các bạn nữa AK-46 luôn xinh tươi,có nhiều niềm vui trong cuộc sống đỗ nguyện vọng 1 và tìm được nửa kia ưng ý của đời mình😘😘😘😘";
                    hover.innerHTML = "#20 Bảo Khang đến Các bạn nữ AK-46";
                    break;
                case 21:
                    text.style.top = "270px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc bạn lúc nào cũng xinh đẹp, rạng rỡ như một bông hoa tràn đầy sức sống nhé!  Mong rằng bạn sẽ gặt hái được nhiều thành công trong tương lai và sớm tìm được \"hoàng tử bạch mã\" của mình (mà biết đâu ngay trong lớp mình cũng có ứng cử viên sáng giá đấy ). Chúc bạn luôn vui vẻ và hạnh phúc! ";
                    hover.innerHTML = "#21 K đến Các bạn nữ AK46";
                    break;
                case 22:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Nhân ngày 8/3, chúc bạn luôn vui vẻ, hạnh phúc,xinh đẹp,học giỏi và gặt hái mọi thành công trong cuộc sống.";
                    hover.innerHTML = "#22 .... đến ....";
                    break;
                case 23:
                    text.style.top = "270px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Vào năm lớp 10 và 11 mình ko thích lớp 1 phần là do mình học dở quá nên sinh ra ganh tị khi lên 12 mình nghĩ lại nếu hồi đó ko ghét mn thì có lẽ mình sẽ có nhiều kỉ niệm hơn, giờ mình chỉ ước mình quay lại lớp 10 để sửa sai thôi, mình xin lỗi và cảm ơn các bạn và cũng như mong các bạn giúp đỡ";
                    hover.innerHTML = "#23 Ẩn danh: Cảm ơn và xin lỗi";
                    break;
                case 24:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc cho tất cả các bạn nữ 12A có một 8/3 thật ý nghĩa, đầy niềm vui và hạnh phúc năm nay năm cuối rồi hi vọng các bạn thích món quà của các bạn nam, nó không mang giá trị vật chất quá lớn nhưng đều là tấm lòng của 23 chàng trai đặt trong đó, sau này buồn buồn lấy ra  xem rồi nhớ tới ngày hôm nay nha. Nói được vậy thôi chứ bí văn rồi mong cho mọi điều tốt đẹp đến với các bạn";
                    hover.innerHTML = "#24 Đức Huy đến tất cả các bạn nữ";
                    break;
                case 25:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Yêu các bạn nữ nhiều lắm 😍😍😍😍";
                    hover.innerHTML = "#25 Ẩn danh đến Tập thể";
                    break;
                case 26:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Vậy là cũng đã thấm thoát 3 năm cấp ba rồi nhỉ... Cuối cấp rồi mình cũng chúc 🐼 luôn vui vẻ, hạnh phúc trong cuộc sống, đạt được nhiều thành công và đỗ vào trường mà bản thân mong muốn nhaa. Và nhớ là luôn giữ gìn sức khỏe và đừng cố thức khuya quá ko thì thành 🐼 thật á:)))";
                    hover.innerHTML = "#26 :) đến 🐼";
                    break;
                case 27:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "tui thì chả văn vở được nhiêu, cũng chả giỏi ăn nói những lời hoa mỹ. Nhưng nhân dịp này thì tui cũng chỉ muốn chúc chị em luôn vui vẻ, hạnh phúc và thành công. Hãy không ngừng cố gắng trên con đường mình đã chọn. Nếu gặp khó khăn hay chán nản, cứ nhớ lời lớp trưởng: cứ thử, không được cái này thì thử cái khác, cứ thử đến khi nào thành công. Thời gian trôi nhanh, nhưng cũng đủ chậm để ta cố gắng và đạt được điều mình mong muốn.";
                    hover.innerHTML = "#27 ẩn danh đến 21 bông hồng";
                    break;
                case 28:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    offset--;
                    if (offset === 0) {
                        text.innerHTML = "🍂Năm học cuối cùng đã trôi qua nhanh hơn chúng ta tưởng. Nhìn lại chặng đường đã đi cùng nhau, có quá nhiều kỷ niệm đáng nhớ, nhưng điều đặc biệt nhất chính là tình bạn mà chúng ta đã xây dựng.<br>Đọc tới đây chắc hẳn các em sẽ đặt câu hỏi là:<br>\" thằng nào đây dãy bay?\". ";
                        hover.innerHTML = "#28.1 \"Anh\"  đến Tập thể";
                    } else if (offset === 1) {
                        currentLocation++;
                        text.innerHTML = "Chắc có lẽ các em không để ý “Anh” là một người chưa từng gọi bất kỳ bạn nữ nào trong AK46 là \"mày\", không phải vì khoảng cách hay xa lạ, mà vì trong mắt a các e luôn là những bông hoa cần được che chở, các “em”luôn xứng đáng được trân trọng, Mỗi người trong lớp đều là một mảnh ghép quan trọng, là những cô gái dthuong+đáng yêu.🥰";
                        hover.innerHTML = "#28.2 \"Anh\"  đến Tập thể";
                    } else if (offset === 2) {
                        currentLocation++;
                        text.innerHTML = "Các em có biết không? Sự có mặt của các em đã làm cho những ngày tháng học sinh của anh trở nên ý nghĩa hơn, đó là phần kí ức thanh xuân tươi đẹp của anh.Mà sao cũng lạ hơ? Con gái nói gì trước là đánh một cái rồi mới nói dãy hả? Sau này chắc anh nhớ lắm những cái tát, nhéo, đánh của các em - tất cả đều là những khoảnh khắc mà sau này, khi ngoảnh lại, chắc a sẽ mếu 🥲.";
                        hover.innerHTML = "#28.3 \"Anh\"  đến Tập thể";
                    } else if (offset === 3) {
                        currentLocation++;
                        text.innerHTML = "Thời gian trôi qua nhanh quá, chẳng mấy chốc mà chúng ta sẽ phải nói lời tạm biệt😕.Nhưng dù có đi đâu, làm gì, mong rằng chúng ta vẫn sẽ luôn nhớ về nhau với những kỷ niệm đẹp nhất.";
                        hover.innerHTML = "#28.4 \"Anh\"  đến Tập thể";
                    } else if (offset === 4) {
                        currentLocation++;
                        text.innerHTML = "🌹Chúc các em luôn mạnh mẽ, tự tin và hạnh phúc. Chúc những ước mơ của các em sẽ sớm thành hiện thực. Dù cuộc sống có khó khăn thế nào, hãy luôn tin rằng phía trước vẫn có ánh sáng, phía sau vẫn còn có “Anh”😎<br>Gửi 21 công chúa ngoan xinh yêu 🫶 ";
                        hover.innerHTML = "#28.5 \"Anh\"  đến Tập thể";
                    }
                    break;
                case 29:
                    text.style.top = "250px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "chúc mấy bạn 8/3 hạnh phúc, học giỏi hơn nữa và ngày càng xin ẹp hơn nhaaaaa :3 <br>&lt bạn nào tương lai có bị bồ đá hay chồng bỏ thi ib tuiii ngày 4 bữa :v &gt<br>(53+17)";
                    hover.innerHTML = "#29 ẩn danh siêuuu đẹp traiiiii đến tất cả";
                    break;
                case 30:
                    text.style.top = "320px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "Mong rằng những điều tốt đẹp nhất sẽ đến với các bạn ❤️";
                    hover.innerHTML = "#30 Đăng đến Các bạn nữ 12A";
                    break;
                case 31:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "8/3 chúc Nhi ngày càng học giỏi , xinh gái , luôn luôn hạnh phúc và đậu nv 1 nha . Vs kiếm đc anh nào nha🤣🥳";
                    hover.innerHTML = "#31 Ẩn danh đến Nhi";
                    break;
                case 32:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "8/3 chúc m luôn vui vẻ , hạnh phúc tràn đầy năng lượng , luôm xinh gái và học giỏi để đỗ nv1 năm nay nha🥳";
                    hover.innerHTML = "#32 Ẩn danh đến Duyên";
                    break;
                case 33:
                    text.style.top = "290px";
                    text.style.fontSize = "25px";
                    text.innerHTML = "8/3 chúc m luôn vui vẻ , yêu đời , hạnh phúc , luôn xinh gái , học giỏi và thành công đỗ nv1 nha🥳";
                    hover.innerHTML = "#33 Ẩn danh đến Trân";
                    break;
                case 34:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Chúc các bạn có một ngày 8/3 thật vui , sôi động và tràn đầy hạnh phúc. Mong rằng sau khi chúng ta lớn sẽ không ai quên đi những ngày tháng tươi đẹp bên nhau mà mọi người đã chung tay tô vẽ ra nó. Hãy luôn nở nụ cười trên môi nhé. Các Em Gái Xinh Đẹp của Anh Thắng 😘🥰";
                    hover.innerHTML = "#34 Anh Thắng đến các Bạn nữ trong Lớp 12A 🥰";
                    break;
                case 35:
                    text.style.top = "230px";
                    text.style.fontSize = "16px";
                    text.innerHTML = "Ấn tượng của mình về bạn là một con người hiền lành,ít nói.Lúc đầu nhắn tin bạn hay hỏi “Ăn cơm chưa” và mình thấy cũng hơi vô vị một xíu.Khi dần tiếp xúc và chơi với nhau thì mình cũng hiểu rõ hơn về bạn.Có lẽ là tính bạn hơi nhút nhát so với mọi người nhưng cho đến ngày hôm nay mình thấy bạn cũng đã thay đổi rất nhiều.Từ cách ăn nói đến giao tiếp mọi thứ bạn đều thể hiện tốt hơn.Mình muốn thấy bạn trong bộ dáng vui vẻ như hiện tại và hi vọng những tháng còn lại bạn sẽ vui hơn thế nữa.Cuối cùng là chúc bạn đỗ được ngôi trường và chọn được ngành nghề mình yêu thích.";
                    hover.innerHTML = "#35 Ẩn danh đến Quyên";
                    break;
                case 36:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Như là một bông hoa,mình thấy được trong bạn một sự nhẹ nhàng và chân thành.Khi chơi và nói chuyện với nhau mình thấy bạn rất là dễ thương và thân thiện.Tuy chưa ngồi chung với nhau nhưng mình mình cũng rất mến bạn. Mình cũng cho bạn sẽ mãi lạc quan,vui tươi nhứ hiện tại và tương lai sẽ hoàn thành được giấc mơ của riêng mình.Hẹn bạn một cuộc đi chơi mùa hè này nha.";
                    hover.innerHTML = "36 Ẩn danh đến Hoa Quỳnh";
                    break;
                case 37:
                    text.style.top = "230px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Gửi bạn bí thư của AK46,3 năm qua mình cũng không nhớ là đã thân từ lúc nào.Nhưng chắc có lẽ là những cuộc gặp gỡ đầu tiên,nói chuyện với nhau cùng nhau đi chơi và nhiều thứ khác nữa.Lúc biết bạn là con giáo viên thì mình hơi wow và nghĩ bạn sẽ ngoan nhưng chắc mình đã lầm.Nhưng mình cũng rất mến bạn bởi sự nhiệt tình và năng lượng tích cực.Đúng là có lúc con người ta sẽ buồn,sẽ tức giận nhưng chúng ta nên giữ cho mình một trái tim ấm áp.Hi vọng rằng bạn của sau này vẫn vui tươi như hiện tại.";
                    hover.innerHTML = "#37 Ẩn danh đến Thương";
                    break;
                case 38:
                    text.style.top = "220px";
                    text.style.fontSize = "16px";
                    text.innerHTML = "Lúc có danh sách lớp thì mình đã khá ấn tượng với bạn vì những thành tích bạn đạt được.Và qua ba năm bạn lại càng tỏa sáng hơn.Lúc bạn nói chuyện mình thấy bạn nói chuyện cũng không hề văn vẻ như lúc bạn viết.Bạn có những ý tưởng và tâm hồn nghệ thuật rất cao.Từ những sản phẩm nho nhỏ đến to lớn.Từ những thước phim nhỏ lẻ hay những những bài dự án của tổ cho đến những hoạt động sôi nổi qua đợt cắm trại lớp 10.Bạn rất giỏi và cũng rất năng động đôi lúc có hơi cọc cằn nhưng điều đó cũng làm bạn trở nên nổi bật.Mai kia lớn lên mình muốn thấy bạn tỏa sáng với những ý tưởng của mình.Và mình cũng chúc bạn sẽ thành công trong sự nghiệp của mình.";
                    hover.innerHTML = "#38 Ẩn danh đến Na";
                    break;
                case 39:
                    text.style.top = "260px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Ấn tượng của bạn với mọi người chắc có lẽ là sự cá tính,mình thấy được năng lượng và sự tự tin từ bạn.Bạn cũng có một vốn hiểu biết rất tốt và bạn cũng rất giỏi.Và hi vọng rằng bạn sẽ đạt được những điều mà bạn mong muốn.";
                    hover.innerHTML = "#39 Ẩn danh đến Thy";
                    break;
                case 40:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Trông bạn lúc đầu có vẻ hơi nhút nhát và trầm tính,nhưng mình thấy có đôi lúc bạn cũng rất nhiệt tình.Mình thấy được sự châm chỉ và tỉ mỉ của bạn qua từng trang giấy.Bạn dùng bút chì để ghi chép và điều đó từng làm mình thấy thắc mắc.Hi vọng rằng sự tỉ mỉ và chăm chỉ ấy sẽ đem lại cho bạn trái ngọt trong những kì thi sắp tới.";
                    hover.innerHTML = "#40 Ẩn danh đến Hà";
                    break;
                case 41:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Cô gái với niềm đam mê sư phạm.Học chung 3 năm nhưng mình chưa từng thấy bạn lên thuyết trình lần nào và mình cũng muốn gửi đến bạn một sự tích cực rằng hãy thử sức với nhiều điều mới để càng trở nên hoàn thiện hơn.Chúc bạn sẽ có một kết quả thật tốt trong những kì thi và tương lai có thể trở thành một cô giáo như bạn từng mong muốn.";
                    hover.innerHTML = "#41 Ẩn danh đến Nhân";
                    break;
                case 42:
                    text.style.top = "225px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Ban đầu có vẻ bạn hơi thu mình với lớp và cũng không mấy nổi bật và cũng có thể nói là mờ nhạt.Nhưng trong những năm lớp 10,11 mình cũng thấy bạn nổ lực rất nhiều nhưng có lẽ kết quả cũng chưa mỉm cười với bạn.Cho tới năm nay mình thật sự cảm thấy bạn đã vươn lên một cách vượt trội.Mình nghĩ đó cũng chính là thành quả mà nổ lực của bạn đã bỏ ra.Mình chúc bạn sẽ đạt được nhiều điều hơn nữa trong tương lai và cũng hi vọng rằng có thể nghe bạn trình bày trọn vẹn những chia sẻ của bạn vào đợt kỉ yếu.";
                    hover.innerHTML = "#42 Ẩn danh đến Thảo";
                    break;
                case 43:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Là một bạn nữ chuyển lớp bạn trông có vẻ tinh nghịch và năng động.Bạn có một sự ngoại giao tốt khi có thể làm quen được nhiều người trong một khoảng thời gian ngắn.Mình thấy bạn trông rất xinh xắn khi chụp ảnh và cũng rất là năng lượng.Hi vọng ngọn lửa đang cháy trong tim bạn sẽ không bao giờ tắt.";
                    hover.innerHTML = "#43 Ẩn danh đến Âu";
                    break;
                case 44:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Gửi cô gái tràn đầy năng lượng,bạn là một người dễ gần và cũng rất là vui vẻ.Từ cách nói chuyện đến cách vui chơi đều vậy.Bạn cũng rất dễ thương và cũng có một tí nét hiện đại.Về tính cách mình thấy bạn rất nhiệt tình với mọi người nên mình cũng thấy được sự quý mến mà các bạn khác dành cho bạn.Chúc bạn sẽ vẫn sẽ giữ được những nét tính cách và cũng chúc bạn đạt được nguyện vọng của mình.";
                    hover.innerHTML = "#44 Ẩn danh đến Suga";
                    break;
                case 45:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Gửi một bạn mà mình cũng rất ngưỡng mộ.Bạn là một người luôn đem lại cho người khác cảm giác gần gũi và thân quen.Nhưng có vẻ bạn vẫn chưa tự tin về bản thân mình lắm.Mình chỉ muốn nói rằng bạn rất giỏi và hãy tự hào vì điều đó.Và chúc bạn sẽ gặt hái được thật nhiều thành quả trong những kì thi sắp tới.Hi vọng sẽ thấy bạn lên đọc bài phát biểu với cương vị là thủ khoa kì thi tốt nghiệp của trường chúng ta.";
                    hover.innerHTML = "#45 Ẩn danh đến Như Quỳnh";
                    break;
                case 46:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Hôm qua đi chơi mình thấy bạn cười rất nhiều và vì có lí do nên bạn phải về sớm nhưng hi vọng buổi sáng ấy sẽ vẫn để lại cho bạn một ấn tượng đặc biệt.Từ những món quà,lời chúc,từng nét vẽ chúng mình cũng đã dành ra những tâm huyết để gửi đến các bạn.Có thể bạn ít nói cũng khi thể hiện cảm xúc với lớp nhưng mình chỉ muốn chia sẻ rằng lúc bạn cười cũng rất dễ thương vì vậy nên hi vọng bạn sẽ vui cười nhiều hơn với lớp chúng ta.";
                    hover.innerHTML = "#46 Ẩn danh đến Bân";
                    break;
                case 47:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Mình cũng biết bạn từ trước khi vào lớp 10.Cho đến những buổi học đầu tiên mình cực kì ấn tượng với khả năng phát âm của bạn.Và không dừng lại ở đó bạn vẫn luôn biết cách làm mình trở nên nổi bật và theo cảm nhận của mình bạn rất toàn diện.Mọi thứ bạn đều ổn và tốt nhưng bạn vẫn giao tiếp với mọi người rất bình thường.Và mình cũng chúc cho bạn đạt được nhiều thành công trên con đường sự nghiệp của bạn.";
                    hover.innerHTML = "#47 Ẩn danh đến Nhi";
                    break;
                case 48:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Một cô gái tự lập là điều mình rất vấn tượng về bạn.Nhưng mình biết để có được những thành quả như bây giờ bạn cũng đã nổ lực rất nhiều.Tuy không biết lựa chọn trong tương lai của bạn như thế nào nhưng mình cũng chúc cho bạn thành công với sự lựa đó của mình.";
                    hover.innerHTML = "#48 Ẩn danh đến Trúc";
                    break;
                case 49:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Gửi bạn tomboy của lớp chúng ta,mình thấy bạn là một người cũng khá giản dị.Mình ấn tượng về bạn là một người thường đối diện với mọi thứ một cách điềm tĩnh mà không hề ít cáu gắt.Có lẽ điều đó đã làm bạn trở nên đặc biệt.Mình xin gửi đến cô nàng với mái tóc tém rất dễ thương của lớp chúng ta một sự tích cực cho tương lai của bạn(Mình thấy bạn để tóc dài cũng xinh lắm)";
                    hover.innerHTML = "#49 Ẩn danh đến Diễm My";
                    break;
                case 50:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Tuy bạn có một chiều cao khá hạn chế nhưng trong những lần xem bạn đánh bóng chuyền thì trông bạn rất là lực luôn.Mình thấy năm nay bạn học cũng giỏi lắm nè,chăm chỉ hơn nữa.Bạn cũng rất dễ thương nha.Chúc bạn đạt được những thành tốt trong những kì thi sắp tới.";
                    hover.innerHTML = "#50 Ẩn danh đến Trân";
                    break;
                case 51:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Đối với mình bạn là một cô gái thú vị,có thể là do cách nói chuyện hoặc cũng có thể là do mình thấy thế.Đôi lúc bạn cũng trông rất ngầu nhưng mà hơi ít cái đôi lúc quá.Nhưng mà cũng chính sự hài hước đó đã để cho mình một ấn tượng rất tốt về bạn.Chúc bạn đạt được ước mơ thành công an của mình.";
                    hover.innerHTML = "#51 Ẩn danh đến Phương";
                    break;
                case 52:
                    text.style.top = "220px";
                    text.style.fontSize = "16px";
                    text.innerHTML = "Vào đầu năm lớp 10,bạn luôn mang khẩu trang bên mình dù cho ở trong lớp và rất ít khi tháo ra.Mình cũng không biết lí do tại sao nhưng qua 3 năm thì chiếc khẩu trang ấy cũng không còn.Bạn cũng trông dễ thương hơn.Mình thấy bạn có vẻ ít nói và cũng rất ít tiếp xúc với mọi người nhưng mình cũng hiểu phần nào lí do của bạn.Hôm qua khi đi chơi cùng lớp thì mình thấy bạn cũng rất vui tính nhưng vẫn còn hơi xa cách với mọi người.Trong những tháng còn lại mình muốn thấy một Trang hòa đồng với mọi người và tươi cười lên nhiều hơn nữa.Và hi vọng rằng bạn sẽ không cảm thấy ngại khi nói chuyện với mọi người cũng như hãy sống thoải mái như thể chúng ta là một gia đình.";
                    hover.innerHTML = "#52 Ẩn danh đến Trang";
                    break;
                case 53:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Gửi cô gái nhỏ nhắn,nhiệt tình của lớp.Qua 3 năm học với nhau mình thấy được sự năng nổ của bạn trong từng tiết học.Sự cố gắng của bạn qua từng ngày tháng cũng dần được đền đáp.Và mình cảm nhận được sự chân chất đâu đó trong một con người miền núi.Sự nhiệt tình của bạn là điều mình rất trân quý.Và cũng hi vọng rằng bạn sẽ gặt hái được kết quả tốt trong kì thi sắp tới.Và hãy nhớ rằng sức mạnh tiềm ẩn của bạn lớn hơn thân hình bạn rất nhiều.";
                    hover.innerHTML = "#53 Ẩn danh đến Yến";
                    break;
                case 54:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Giọng nói của bạn rất nhẹ nhàng,mình cảm nhận được bạn là một người sâu lắng.Và bạn có vẻ cũng là người không thích vội vàng cho lắm.Và mình cảm nhận được đâu đó trong bạn vẫn có một nét gì đó rất riêng... Không biết bạn có dự đinhn như thế nào cho tương lai nên mình chỉ chúc cho bạn sẽ có được kết quả như mình kì vọng.";
                    hover.innerHTML = "#54 Ẩn danh đến Duyên";
                    break;
                case 55:
                    text.style.top = "250px";
                    text.style.fontSize = "18px";
                    text.innerHTML = "Bạn là một cô gái rất dịu dàng,từ tính cách đến lời nói mọi thứ đều rất tĩnh lặng.Tuy bạn cũng không nổi bật như những bạn khác nhưng mình thấy được sự ấm áp của bạn qua nhiều hành động.Bạn thường đứng sau mọi người để quan sát và điều ấy có thể khiến bạn trở nên bị lu mờ.Và mình hi vọng rằng bạn sẽ tự tin hơn trong việc kết nối cùng mọi người hơn nữa.Chúc bạn mãi giữ được những nét đẹp nhẹ nhàng ấy và đừng để đánh mất nó.";
                    hover.innerHTML = "#55 Ẩn danh đến Tiểu My";
                    break;
                default:
                    throw new Error("unkown state");
            }
            currentLocation--;
            // switch(currentLocation) {
            //     case 2:
            //         text.style.top = "320px";
            //         text.style.fontSize = "30px";
            //         text.innerHTML = "Happy Women's Day";
            //         hover.innerHTML = "Nhấn mũi tên để thay đổi nội dung";
            //         break;
            //     case 3:
            //         text.style.top = "320px";
            //         text.style.fontSize = "25px";
            //         text.innerHTML = "Chúc các bạn nữ 12AK46 \"Trẻ mãi không già nhé <3 ; )) \"";
            //         hover.innerHTML = "Bảo Đz đến All";
            //         break;
            //     case 4:
            //         text.style.top = "250px";
            //         text.style.fontSize = "18px";
            //         text.innerHTML = "Một người anh em của Trường Xuân Lẫm nói chung anh em mình không còn gì xa lạ nữa những gì tốt đẹp nhất tui cũng chúc cho bạn ở những sự kiện khác nhau rồi, đây chưa phải lời chúc cuối nhưng hi vọng nó thành sự thật, cố gắng thật thành công, vui vẻ, hạnh phúc, làm được nhiều điều mình muốn, sống tốt với bản thân và gia đình. Oke nha lời chúc 8/3 cuối cùng với cương vị là học sinh nhaaa";
            //         hover.innerHTML = "Đức Huy đến Diễm My";
            //         break;
            //     case 5:
            //         text.style.top = "250px";
            //         text.style.fontSize = "18px";
            //         text.innerHTML = "lại 1 người anh em Trường Xuân Lẫm của tui, nói chung riêng Phương không muốn nói nhiều. Chúc cho Phương thật thành công, thực hiện được tất cả mong muốn của bản thân, ăn được nhiều hơn những món ăn ưa thích, muốn gì ăn nấy không cần nhìn giáa cố gắng nhaa";
            //         hover.innerHTML = "Đức Huy đến Hồng Phương";
            //         break;
            //     case 6:
            //         text.style.top = "250px";
            //         text.style.fontSize = "18px";
            //         text.innerHTML = "Riêng fen sẵn đây tui nói luôn 3 năm fen làm bí thư như vậy là quá oke rồi nhờ có fen mà lớp nó cũng nhộn nhịp hơn, tươi hơn, bây giờ đang ở chặn cuối chúc cho fen đỗ vào nguyện vọng 1, thành công trong cuộc sống và sâu xa hơn là công việc, làm được những điều mình muốn và đừng nản dù gặp bất cứ chuyện gì, mong cho fen trong tương lai trở thành phiên bản hoàn hảo nhất của chính mình";
            //         hover.innerHTML = "Đức Huy đến Song Thương";
            //         break;
            //     case 7:
            //         text.style.top = "250px";
            //         text.style.fontSize = "18px";
            //         text.innerHTML = "Nói dài dòng, liêng thiêng mệt chúc cho bạn tương lai có một cuộc sống như mơ ước, thực hiện được mọi dự định của bản thân, còn về đỗ nguyện vọng 1 blabla tui tin bạn làm được, cố lên hi vọng năm sau họp lớp thấy Ý Nhi dắt anh nào đó đẹp đẹp ngon ngon về chơi nha, nói chung là chúc tất cả, lời chúc 8/3 cuối cùng trên danh nghĩa là học sinh nhaa";
            //         hover.innerHTML = "Đức Huy đến Ý Nhi";
            //         break;
            //     case 8:
            //         text.style.top = "250px";
            //         text.style.fontSize = "18px";
            //         text.innerHTML = "Chúc cậu 8/3 sống như nữ hoàng, vui tươi, lạc quan yêu đời.<br>Gặp nhiều may mắn trong cuộc sống, đạt được nhiều thành công trên con đường học tập và sự nghiệp.<br>Thực hiện được mọi điều cậu mong ước trong cuộc sống.<br>Nếu thấy cuộc sống mệt mỏi quá thì về bên tui ❤❤❤❤";
            //         hover.innerHTML = "Ẩpn davnh đến Tiểu My ❤❤❤";
            //         break;
            //     case 9:
            //         text.style.top = "320px";
            //         text.style.fontSize = "25px";
            //         text.innerHTML = "I love you <3";
            //         hover.innerHTML = "ẩn danh đến Tiểu My";
            //         break;
            //     case 10:
            //         text.style.top = "320px";
            //         text.style.fontSize = "25px";
            //         text.innerHTML = "Chúc cho bạn diễm my có một ngày 8/3 thật vui vẽ và đày hạnh phúc nha";
            //         hover.innerHTML = "Ẩn danh đến Dmy";
            //         break;
            //     case 11:
            //         text.style.top = "320px";
            //         text.style.fontSize = "25px";
            //         text.innerHTML = "Tên cậu đẹp lắm, nhất định phải có trong giấy trúng tuyển nhé";
            //         hover.innerHTML = "Dô danh đến ý nhi";
            //         break;
            //     case 12:
            //         text.style.top = "320px";
            //         text.style.fontSize = "25px";
            //         text.innerHTML = "Chúc các bạn sẽ không đẹp nhất nhưng sẽ đẹp nhất trong lòng ai đó .";
            //         hover.innerHTML = "Ẩn danh đến Tất cả";
            //         break;
            //     case 13:
            //         text.style.top = "290px";
            //         text.style.fontSize = "25px";
            //         text.innerHTML = "Chúc cho mn có một ngày 8/3 thật vui vẻ ngày càng xinh đẹp thành công và đạt những thành tích tốt trong thời gian tới đặc biệt là đậu nv1 nhe";
            //         hover.innerHTML = "Quốc an đến tất cả các bạn nữ của 12a";
            //         break;
            //     case 14:
            //         text.style.top = "290px";
            //         text.style.fontSize = "25px";
            //         text.innerHTML = "Chúc cậu 8/3 vui vẻ, đạt được nhiều thành công trong cuộc sống, mong cậu sẽ luôn hạnh phúc với lựa chọn của mình trên con đường mình chọn❤❤";
            //         hover.innerHTML = "Ẩn dannh đến Khánh Hà";
            //         break;
            //     case 15:
            //         text.style.top = "320px";
            //         text.style.fontSize = "25px";
            //         text.innerHTML = "I love you, Hà 😘❤";
            //         hover.innerHTML = "Ẩn danh đến Khánh Hà";
            //         break;
            //     case 16:
            //         text.style.top = "280px";
            //         text.style.fontSize = "25px";
            //         text.innerHTML = "Cảm ơn cậu đã cùng mình đi hết 3 năm cấp 3. Hôm nay 8/3 mình chúc cậu mãi hạnh phúc, nhiều sức khỏe và may mắn, đạt được những mong ước của mình trong tương lai.❤❤❤";
            //         hover.innerHTML = "Xuân Vinh đến Huỳnh Trang";
            //         break;
            //     case 17:
            //         text.style.top = "280px";
            //         text.style.fontSize = "25px";
            //         text.innerHTML = "Chúc đại ca 8/3 vui vẻ, mãi hạnh phúc, nhiều sức khỏe và may mắn, đạt được những mong ước của mình trong tương lai.♥♥♥";
            //         hover.innerHTML = "Xuân Vinh đến Bân Bân";
            //         break;
            //     case 18:
            //         text.style.top = "280px";
            //         text.style.fontSize = "18px";
            //         text.innerHTML = "Chúc cậu một ngày 8/3 thật vui vẻ , luôn ngập tràn niềm vui hạnh phúc và yêu thương❤️💐. Dù 8/3 hay bất kì ngày nào đi nữa người đẹp cũng v nha . Và hãy luôn luôn là 1 đoá hoa rực rỡ nhất🌹<br>Và cuối cùng chúc cậu ngày càng xinh gái , học giỏi và đạt được ước mơ , đậu nv1 trong năm nay🍀";
            //         hover.innerHTML = "Ẩn Danh đến Song Thương";
            //         break;
            //     case 19:
            //         text.style.top = "320px";
            //         text.style.fontSize = "25px";
            //         text.innerHTML = "8/3 thật vui vẻ , ngày càng học giỏi , đẹp gái , đạt được ước mơ CAND nha";
            //         hover.innerHTML = "Ẩn danh đến Hồng Phương";
            //         break;
            //     case 20:
            //         text.style.top = "280px";
            //         text.style.fontSize = "25px";
            //         text.innerHTML = "Chúc cậu 8/3 đánh nền không mốc , tán má không bết , kẻ mắt 5s , gắn mi nhoay nhoáy và chúc cậu mọi điều tốt đẹp và đỗ và ngành truyền thông mà mình yêu thích";
            //         hover.innerHTML = "Ẩn Danh đến Lê Na";
            //         break;
            //     case 21:
            //         text.style.top = "320px";
            //         text.style.fontSize = "25px";
            //         text.innerHTML = "8/3 thật vui vẻ , hạnh phúc , ngày càng xinh đẹp và sớm đạt được ước mơ của mình";
            //         hover.innerHTML = "Ẩn Danh đến Diễm My";
            //         break;
            //     case 22:
            //         text.style.top = "270px";
            //         text.style.fontSize = "25px";
            //         text.innerHTML = "Nãy dùng hết văn rồi nên giờ chúc công nghiệp tí : chúc các bạn nữa AK-46 luôn xinh tươi,có nhiều niềm vui trong cuộc sống đỗ nguyện vọng 1 và tìm được nửa kia ưng ý của đời mình😘😘😘😘";
            //         hover.innerHTML = "Bảo Khang đến Các bạn nữ AK-46";
            //         break;
            //     case 23:
            //         text.style.top = "270px";
            //         text.style.fontSize = "18px";
            //         text.innerHTML = "Chúc bạn lúc nào cũng xinh đẹp, rạng rỡ như một bông hoa tràn đầy sức sống nhé!  Mong rằng bạn sẽ gặt hái được nhiều thành công trong tương lai và sớm tìm được \"hoàng tử bạch mã\" của mình (mà biết đâu ngay trong lớp mình cũng có ứng cử viên sáng giá đấy ). Chúc bạn luôn vui vẻ và hạnh phúc! ";
            //         hover.innerHTML = "K đến Các bạn nữ AK46";
            //         break;
            //     default:
            //         throw new Error("unkown state");
            // }
            // currentLocation--;
        }
    }
}
