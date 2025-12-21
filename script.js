// =====================================================
// RANDOM QUIZ ENGINE
// - Random order of questions
// - Shuffle A/B/C/D options for each question
// - Feedback only: "Right" or "Understand"
// =====================================================

// ===============================
// 1) QUIZ DATA
// Dán 190 câu của bạn vào mảng questions này.
// correct: "A" | "B" | "C" | "D"
// ===============================
const questions = [
  {
    no: 1,
    text: "Các hình thức vi phạm thông tin",
    options: {
      a: "Thụ động, gián tiếp",
      b: "Chủ động, trực tiếp",
      c: "Thụ động, chủ động",
      d: "Trực tiếp, gián tiếp",
    },
    correct: "c",
  },
  {
    no: 2,
    text: "Bảo mật là kỹ thuật che dấu thông tin không cho phép các thực thể",
    options: {
      a: "Có quyền truy xuất",
      b: "Không có quyền truy xuất",
      c: "Từ chối dịch vụ",
      d: "Được phép từ chối dịch vụ",
    },
    correct: "b",
  },
  {
    no: 3,
    text: "Mật mã là quá trình chuyển đổi thông tin bản rõ sang",
    options: {
      a: "Dạng mã hóa (Encryption)",
      b: "Dạng từ chối dịch vụ",
      c: "Phủ nhận",
      d: "Không được quyền truy xuất",
    },
    correct: "a",
  },
  {
    no: 4,
    text: "Đâu là một đặc tính của an toàn dữ liệu?",
    options: {
      a: "Tính toàn vẹn",
      b: "Tính trong suốt",
      c: "Tính tương tranh",
      d: "Tính cạnh tranh",
    },
    correct: "a",
  },
  {
    no: 5,
    text: "Đâu là một đặc tính của an toàn dữ liệu?",
    options: {
      a: "Tính xác thực",
      b: "Tính trong suốt",
      c: "Tính tương tranh",
      d: "Tính cạnh tranh",
    },
    correct: "a",
  },
  {
    no: 6,
    text: "Đâu là một đặc tính của an toàn dữ liệu?",
    options: {
      a: "Tính khả dụng",
      b: "Tính trong suốt",
      c: "Tính tương tranh",
      d: "Tính cạnh tranh",
    },
    correct: "a",
  },
  {
    no: 7,
    text: "Hình thức tấn công nào được cho là khó phát hiện hơn?",
    options: {
      a: "Tấn công chủ động",
      b: "Tấn công thụ động",
    },
    correct: "b",
  },
  {
    no: 8,
    text: "Phương pháp tấn công nào thực hiện bằng cách dò mật khẩu?",
    options: {
      a: "Brute – force",
      b: "Scam",
      c: "Buffer over flow",
      d: "DoS",
    },
    correct: "a",
  },
  {
    no: 9,
    text: "Phương pháp tấn công nào thực hiện bằng cách lừa đảo nạn nhân?",
    options: {
      a: "Brute – force",
      b: "Scam",
      c: "Buffer over flow",
      d: "DoS",
    },
    correct: "b",
  },
  {
    no: 10,
    text: "Phương pháp tấn công nào thực hiện bằng cách tăng lượng traffic đến máy nạn nhân làm tê liệt hệ thống nạn nhân?",
    options: {
      a: "Brute – force",
      b: "Scam",
      c: "SQL Injection",
      d: "DoS",
    },
    correct: "d",
  },
  {
    no: 11,
    text: "Nếu đặt mật khẩu chỉ dùng 6 ký tự chữ cái thường (trong bảng chữ cái 26 ký tự), kẻ tấn công sẽ phải thử dò tối đa bao nhiêu lần để có được mật khẩu đúng?",
    options: {
      a: "26^10",
      b: "26^6",
      c: "26!",
      d: "26x26",
    },
    correct: "b",
  },
  {
    no: 12,
    text: "Đâu là một đặc tính của an toàn dữ liệu?",
    options: {
      a: "Tính bảo mật",
      b: "Tính trong suốt",
      c: "Tính tương tranh",
      d: "Tính cạnh tranh",
    },
    correct: "a",
  },
  {
    no: 13,
    text: "Đây là định nghĩa đối tượng tấn công mạng nào? “Là những kẻ xâm nhập vào mạng trái phép bằng cách sử dụng các công cụ phá mật khẩu hoặc khai thác các điểm yếu của các thành phần truy nhập trên hệ thống”",
    options: {
      a: "Hacker",
      b: "Masquerader",
      c: "Eavesdropping",
    },
    correct: "a",
  },
  {
    no: 15,
    text: "Đây là định nghĩa đối tượng tấn công mạng nào? “Là những kẻ giả mạo thông tin trên mạng. Có một số hình thức như giả mạo địa chỉ IP, giả mạo tên miền, giả mạo định danh người dùng”",
    options: {
      a: "Hacker",
      b: "Masquerader",
      c: "Eavesdropping",
    },
    correct: "b",
  },
  {
    no: 16,
    text: "Đây là định nghĩa đối tượng tấn công mạng nào? “Là những đối tượng nghe trộm thông tin trên mạng, sử dụng các công cụ Sniffer, sau đó dùng các công cụ phân tích và debug để lấy được các thông tin có giá trị”",
    options: {
      a: "Hacker",
      b: "Masquerader",
      c: "Eavesdropping",
    },
    correct: "c",
  },
  {
    no: 17,
    text: "Đâu không phải là một chức năng của quản lý mạng",
    options: {
      a: "Quản lý cấu hình",
      b: "Quản lý sự cố",
      c: "Quản lý doanh số",
      d: "Quản lý hiệu năng",
    },
    correct: "c",
  },
  {
    no: 18,
    text: "Đâu là một giao thức quản lý mạng",
    options: {
      a: "SMTP",
      b: "SNMP",
      c: "HTTP",
      d: "FTP",
    },
    correct: "b",
  },
  {
    no: 19,
    text: "Địa chỉ MAC gồm bao nhiêu bit?",
    options: {
      a: "16",
      b: "32",
      c: "48",
      d: "64",
    },
    correct: "c",
  },
  {
    no: 20,
    text: "Đánh dấu câu đúng về cách mà Ethernet quản lý việc sử dụng kênh truyền vật lý",
    options: {
      a: "Phân chia kênh theo thời gian",
      b: "Phát hiện tranh chấp đường truyền, khi có tranh chấp thì hoãn gửi, sẽ gửi lại sau 1 khoảng thời gian ngẫu nhiên",
      c: "Phân chia theo tần số",
      d: "Phát hiện tranh chấp đường truyền, khi có tranh chấp thì hoãn gửi, sẽ gửi lại sau 1 khoảng thời gian xác định",
    },
    correct: "b",
  },
  {
    no: 21,
    text: "Công nghệ LAN nào sử dụng phương pháp CSMA/CD",
    options: {
      a: "FDDI",
      b: "Ethernet",
      c: "Token Ring",
      d: "ArcNet",
    },
    correct: "b",
  },
  {
    no: 22,
    text: "Hiện nay, mạng kiểu Bus không được các nhà thiết kế mạng ưa chuộng, nguyên nhân là",
    options: {
      a: "Dữ liệu gởi đi từ một máy sẽ truyền đi theo cả hai chiều, gây ảnh hưởng đến tốc độ trao đổi thông tin trong mạng",
      b: "Khi có sự cố trên cáp thì việc khắc phục rất khó khăn hoặc cần mở rộng thì mạng phải ngừng hoạt động",
      c: "Chi phí đầu tư lớn",
      d: "Kết nối rất phức tạp",
    },
    correct: "b",
  },
  {
    no: 23,
    text: "Đối với mạng hình Bus thì",
    options: {
      a: "Khi một nút mạng bị sự cố thì toàn mạng có thể bị ảnh hưởng",
      b: "Khi một chỗ nào đó trên cáp chính bị sự cố thì toàn mạng ngừng hoạt động",
      c: "Khi một nút mạng bị sự cố thì các trạm còn lại vẫn hoạt động bình thường",
      d: "Việc khắc phục sự cố rất dễ dàng",
    },
    correct: "b",
  },
  {
    no: 24,
    text: "Chọn phát biểu không đúng về mạng hình Ring",
    options: {
      a: "Bao gồm một đường tròn không có điểm đầu và điểm cuối",
      b: "Thông tin trên mạng hoạt động theo một chiều xác định",
      c: "Khi qua các nút, thông tin được khuyếch đại nên khoảng cách giữa 2 nút có thể xa nhau",
      d: "Thẻ bài có thể mang theo dữ liệu từ nhiều trạm đồng thời",
    },
    correct: "d",
  },
  {
    no: 25,
    text: "Khi nói về cách kết nối và hoạt động của mạng bố trí kiểu vòng thì trường hợp nào sau đây là sai",
    options: {
      a: "Các máy tính đóng vai trò như một bộ khuếch đại tín hiệu trước khi gởi đi tiếp",
      b: "Các gói tin được gởi đi kèm theo một thẻ bài (Token)",
      c: "Các gói tin trong mạng được truyền đi theo cả hai chiều",
      d: "Các máy tính trong mạng được kết nối thành một vòng khép kín, máy cuối cùng kế liền sau máy đầu tiên",
    },
    correct: "c",
  },
  {
    no: 26,
    text: "Trong phương pháp truy cập đường truyền Token Ring, gói tin",
    options: {
      a: "Sau khi đến đích sẽ bị huỷ bỏ",
      b: "Sau khi đến đích sẽ tiếp tục đi về trạm nguồn",
      c: "Sau khi đến đích sẽ chuyển trạng thái từ bận sang rỗi",
      d: "Sau khi đến đích sẽ được thêm ký tự ACK",
    },
    correct: "b",
  },
  {
    no: 27,
    text: "Khẳng định nào đúng khi nói về nguyên nhân phá vỡ hệ thống trong mạng Token RING",
    options: {
      a: "Trùng địa chỉ",
      b: "Thẻ bài “bận” không ngừng trên vòng",
      c: "Đứt vòng",
      d: "Khởi tạo vòng logic",
    },
    correct: "c",
  },
  {
    no: 28,
    text: "Thiết bị nào sau đây sử dụng tại trung tâm của mạng hình sao:",
    options: {
      a: "Switch",
      b: "Brigde",
      c: "Port",
      d: "Repeater",
    },
    correct: "a",
  },
  {
    no: 29,
    text: "Để hạn chế sự đụng độ của các gói tin trên mạng người ta chia mạng thành các mạng nhỏ hơn và nối kết chúng lại bằng các thiết bị:",
    options: {
      a: "Repeaters",
      b: "Hubs",
      c: "Switches",
      d: "Card mạng (NIC)",
    },
    correct: "c",
  },
  {
    no: 30,
    text: "Kiến trúc một mạng LAN có thể là:",
    options: {
      a: "RING",
      b: "BUS",
      c: "STAR",
      d: "Có thể phối hợp cả RING, BUS và STAR",
    },
    correct: "d",
  },
  {
    no: 31,
    text: "Mô tả nào sau đây là cho mạng hình sao (star)",
    options: {
      a: "Truyền dữ liệu qua cáp đồng trục",
      b: "Mỗi nút mạng đều kết nối trực tiếp với tất cả các nút khác",
      c: "Có một nút trung tâm và các nút mạng khác kết nối đến",
      d: "Các nút mạng sử dụng chung một đường cáp",
    },
    correct: "c",
  },
  {
    no: 32,
    text: "Nhược điểm của mạng dạng hình sao là :",
    options: {
      a: "Khó cài đặt và bảo trì",
      b: "Khó khắc phục khi lỗi cáp xảy ra, và ảnh hưởng tới các nút mạng khác",
      c: "Cần quá nhiều cáp để kết nối tới nút mạng trung tâm",
      d: "Không có khả năng thay đổi khi đã lắp đặt",
    },
    correct: "c",
  },
  {
    no: 33,
    text: "Đặc điểm của mạng dạng Bus :",
    options: {
      a: "Tất cả các nút mạng kết nối vào nút mạng trung tâm (Ví dụ như Hub)",
      b: "Tất cả các nối kết nối trên cùng một đường truyền vật lý.",
      c: "Tất cả các nút mạng đều kết nối trực tiếp với nhau.",
      d: "Mỗi nút mạng kết nối với 2 nút mạng còn lại.",
    },
    correct: "b",
  },
  {
    no: 34,
    text: "Modem dùng để:",
    options: {
      a: "Giao tiếp với mạng",
      b: "Truyền dữ liệu đi xa",
      c: "Truyền dữ liệu trong mạng LAN",
      d: "Giao tiếp với mạng và để truyền dữ liệu đi xa",
    },
    correct: "d",
  },
  {
    no: 35,
    text: "Để kết nối hai máy tính với nhau ta có thể sử dụng :",
    options: {
      a: "Hub",
      b: "Switch",
      c: "Nối cáp trực tiếp",
      d: "Tất cả đều đúng",
    },
    correct: "d",
  },
  {
    no: 36,
    text: "Chuỗi số “00-08-ac-41-5d-9f” có thể là:",
    options: {
      a: "Địa chỉ IP",
      b: "Địa chỉ port",
      c: "Địa chỉ MAC",
      d: "Tất cả đều sai",
    },
    correct: "c",
  },
  {
    no: 37,
    text: "Phát biểu nào sau đây là đúng nhất cho Switch",
    options: {
      a: "Sử dụng địa chỉ vật lý và hoạt động tại tầng Physical của mô hình OSI",
      b: "Sử dụng địa chỉ vật lý và hoạt động tại tầng Network của mô hình OSI",
      c: "Sử dụng địa chỉ vật lý và hoạt động tại tầng Data Link của mô hình OSI",
      d: "Sử dụng địa chỉ IP và hoạt động tại tầng Network của mô hình OSI",
    },
    correct: "c",
  },
  {
    no: 38,
    text: "Thiết bị Hub cho phép",
    options: {
      a: "Kéo dài 1 nhánh LAN thông qua việc khuyếch đại tín hiệu truyền đến nó",
      b: "Ngăn không cho các packet thuộc loại Broadcast đi qua nó",
      c: "Giúp định tuyến cho các packets",
      d: "Kết nối nhiều máy tính lại với nhau để tạo thành một nhánh LAN (segment)",
    },
    correct: "d",
  },
  {
    no: 39,
    text: "Mạng máy tính dựa vào tiêu chí nào để phân loại?",
    options: {
      a: "Cấu trúc vật lý của mạng",
      b: "Khả năng sử dụng thông tin của người sử dụng",
      c: "Độ cân bằng tải của dữ liệu trên mạng",
      d: "Tốc độ truyền dữ liệu trên mạng",
    },
    correct: "a",
  },
  {
    no: 40,
    text: "Mạng máy tính dựa vào tiêu chí nào để phân loại?",
    options: {
      a: "Khoảng cách địa lý của hệ thống mạng",
      b: "Khả năng sử dụng thông tin của người sử dụng",
      c: "Độ cân bằng tải của dữ liệu trên mạng",
      d: "Phương thức truyền dữ liệu của hệ thống mạng",
    },
    correct: "a",
  },
  {
    no: 41,
    text: "Mạng máy tính dựa vào tiêu chí nào để phân loại?",
    options: {
      a: "Độ cân bằng tải của dữ liệu trên mạng",
      b: "Phương thức truyền dữ liệu của hệ thống mạng",
      c: "Mô hình của hệ thống mạng",
      d: "Khả năng sử dụng thông tin của người sử dụng",
    },
    correct: "c",
  },
  {
    no: 42,
    text: "Mạng máy tính phân chia làm các mô hình mạng nào",
    options: {
      a: "Mô hình mạng tập trung",
      b: "Mô hình mạng phân tán",
      c: "Cả 2 mô hình được đưa ra",
      d: "Không có mô hình nào trong 2 mô hình được đưa ra",
    },
    correct: "c",
  },
  {
    no: 43,
    text: "Mô hình mạng peer-to-peer nằm trong mô hình nào?",
    options: {
      a: "Mô hình mạng tập trung",
      b: "Mô hình mạng phân tán",
      c: "Cả 2 mô hình được đưa ra",
      d: "Không thuộc mô hình nào trong 2 mô hình được đưa ra",
    },
    correct: "b",
  },
  {
    no: 44,
    text: "Mô hình mạng Client/Server nằm trong mô hình nào?",
    options: {
      a: "Mô hình mạng tập trung",
      b: "Mô hình mạng phân tán",
      c: "Cả 2 mô hình được đưa ra",
      d: "Mô hình khác",
    },
    correct: "a",
  },
  {
    no: 45,
    text: "Topology mạng được mô tả như thế nào?",
    options: {
      a: "Đặc điểm của hệ thống mạng",
      b: "Kiến trúc của hệ thống mạng",
      c: "Cách thức kết nối vật lý của hệ thống mạng",
      d: "Phương thức truyền dữ liệu trong hệ thống mạng",
    },
    correct: "c",
  },
  {
    no: 46,
    text: "Protocol có nghĩa là gì?",
    options: {
      a: "Phương thức truyền dữ liệu giữa các máy tính, quy định cách truyền dữ liệu trên mạng",
      b: "Phương thức gửi gói tin trong mạng",
      c: "Phương thức mà máy chủ cung cấp cho các máy trạm",
      d: "Phương thức kết nối mà các máy trạm liên kết với nhau",
    },
    correct: "a",
  },
  {
    no: 47,
    text: "Khoảng cách tối đa trong mạng WAN là bao nhiêu km?",
    options: {
      a: "100 km",
      b: "1000 km",
      c: "500 km",
      d: "10 km",
    },
    correct: "b",
  },
  {
    no: 48,
    text: "Mạng LAN được viết tắt bởi cụm từ nào sau đây?",
    options: {
      a: "Local Area Networks",
      b: "Local Area Network",
      c: "Low Area Networks",
      d: "Low Area Network",
    },
    correct: "b",
  },
  {
    no: 49,
    text: "Mạng GAN được viết tắt bởi cụm từ nào sau đây",
    options: {
      a: "Gold Area Network",
      b: "Global Area Networks",
      c: "Global Area Network",
      d: "Ghost Area Network",
    },
    correct: "c",
  },
  {
    no: 50,
    text: "Một hệ thống mạng của một cơ quan gồm có 150 máy tính nằm trong một tòa nhà trong đó có 3 máy chủ. Tất cả các máy tính đều có thể truy cập lẫn nhau và lấy được tài nguyên trên mạng. Hệ thống trên có tên gọi là gì?",
    options: {
      a: "LAN",
      b: "WAN",
      c: "Internet",
      d: "MAN",
    },
    correct: "a",
  },
  {
    no: 51,
    text: "Một hệ thống mạng của một tổng công ty đặt trụ sở tại Hà nội và một số công ty thành viên (công ty chi nhánh) được đặt cách tổng công ty là 150Km. Hệ thống mạng của công ty trên được gọi là gì?",
    options: {
      a: "LAN",
      b: "WAN",
      c: "GAN",
      d: "MAN",
    },
    correct: "b",
  },
  {
    no: 52,
    text: "Một công ty có 1 mạng LAN ở trụ sở chính tại 45 Hàng Bài, Quận Hoàn Kiếm, Hà Nội. Giám đốc Công ty kết nối vào mạng Công ty từ nhà riêng (47 Hàng Bài, Quận Hoàn Kiếm, Hà Nội thông qua modem (dial-up). Hãy cho biết mạng tổng thể (LAN của Công ty và PC của giám đốc) là gì?",
    options: {
      a: "WAN",
      b: "LAN",
      c: "MAN",
      d: "GAN",
    },
    correct: "a",
  },
  {
    no: 53,
    text: "Dịch vụ trên mạng Internet bao gồm dịch vụ nào dưới đây?",
    options: {
      a: "DHCP",
      b: "DNS",
      c: "HTTPS",
      d: "Networking Service",
    },
    correct: "b",
  },
  {
    no: 54,
    text: "Một Tổng công ty có 5 Công ty thành viên được đặt trụ sở ở TPHCM, Hà nội, Lạng sơn, Huế và Cà mau. Vậy hệ thống mạng của Tổng công ty trên được gọi là hệ thống mạng nào trong các hệ thống mạng sau?",
    options: {
      a: "LAN",
      b: "MAN",
      c: "WAN",
      d: "GAN",
    },
    correct: "c",
  },
  {
    no: 55,
    text: "Hệ thống mạng MAN được viết tắt bởi cụm từ nào trong các cụm từ sau?",
    options: {
      a: "Metropolitan Area Network",
      b: "Metropolitance Area Network",
      c: "Metropolitant Area Network",
      d: "Metropolitants Area Network",
    },
    correct: "a",
  },
  {
    no: 56,
    text: "Một hệ thống mạng của một cơ quan gồm có 150 máy tính nằm trong một tòa nhà. Việc chia sẻ thông tin do các từng máy tính quyết định, vậy hệ thống mạng này có mấy máy chủ?",
    options: {
      a: "0 máy chủ",
      b: "1 máy chủ",
      c: "2 máy chủ",
      d: "Khác",
    },
    correct: "a",
  },
  {
    no: 57,
    text: "Phạm vi hoạt động của mạng LAN được xác định trong khoảng nào?",
    options: {
      a: "Nhỏ hơn 100 km",
      b: "Nhỏ hơn 10 km",
      c: "Nhỏ hơn 1 km",
      d: "Nhỏ hơn 1000 km",
    },
    correct: "b",
  },
  {
    no: 58,
    text: "Khi nói về mạng Internet thì phát biểu nào sau đây là đúng",
    options: {
      a: "Mạng Internet chính là Web",
      b: "\"Hội đồng về kiến trúc Internet\" là tổ chức sáng lập và là chủ sở hữu của mạng Internet",
      c: "Internet cung cấp cho mọi người khả năng khai thác nhiều dịch vụ, thông tin khác nhau. Mọi dịch vụ và thông tin trên Internet đều là miễn phí",
      d: "Các máy tính đơn lẻ hoặc mạng máy tính tham gia vào Internet một cách tự nguyện và bình đẳng",
    },
    correct: "d",
  },
  {
    no: 59,
    text: "Phát biểu nào sau đây là không đúng khi nói về cách kết nối Internet",
    options: {
      a: "Người dùng cần đăng ký với một nhà cung cấp dịch vụ Internet (ISP – Internet Service Provider) để được hỗ trợ cài đặt và cấp quyền truy cập Internet",
      b: "Phải có môđem và một đường kết nối riêng (có dây như đường điện thoại, đường truyền thuê bao (leased line), đường truyền ADSL, đường truyền hình cáp hoặc không đây như Wi-Fi)",
      c: "Các máy tính sử dụng bộ giao thức truyền thông TCP/IP để kết nối vào Internet",
      d: "Các máy tính đơn lẻ hoặc các mạng LAN, WAN kết nối vào hệ thống mạng của ISP rồi từ đó kết nối vào Internet",
    },
    correct: "b",
  },
  {
    no: 60,
    text: "Khi sử dụng Internet, theo em điều gì sau đây là nên làm",
    options: {
      a: "Cung cấp các thông tin cá nhân (tên, địa chỉ, thông tin về gia đình, hình ảnh,…)",
      b: "Lưu ý đến vấn đề bản quyền",
      c: "Nhận/mở các tệp/thư không rõ nguồn gốc hoặc không tin cậy",
      d: "Dùng mật khẩu ngắn gọn để nâng cao hiệu quả sử dụng mạng",
    },
    correct: "b",
  },
  {
    no: 61,
    text: "Liên mạng có thể được liên kết bởi LAN to LAN, LAN to WAN và....",
    options: {
      a: "Mạng chuyển gói",
      b: "Mạng chuyển mạch kênh",
      c: "WAN to WAN",
      d: "Mạng ISDN",
    },
    correct: "c",
  },
  {
    no: 62,
    text: "Chọn câu đúng trong các phát biểu sau:",
    options: {
      a: "Mạng máy tính là một hệ thống các máy tính kết nối với nhau để thực hiện các công việc chung",
      b: "Mạng máy tính là quá trình đi dây cáp mạng và cài đặt máy chủ",
      c: "Mạng máy tính là hệ thống máy tính phân tán",
      d: "Mạng máy tính là hệ thống tính toán theo mô hình client – server",
    },
    correct: "a",
  },
  {
    no: 63,
    text: "Chọn câu sai khi nói về giao thức (Protocol)",
    options: {
      a: "Giao thức quy định cách thức liên kết, trao đổi thông tin trong mạng máy tính",
      b: "Giao thức được phân theo từng tầng",
      c: "Giao thức là bộ quy ước, quy tắc quy định cách thức xử lý số liệu",
      d: "Giao thức là mô hình phân tầng",
    },
    correct: "d",
  },
  {
    no: 64,
    text: "Phương tiện vật lý nào cho tỉ lệ lỗi ít nhất khi truyền tín hiệu",
    options: {
      a: "Cáp đồng trục dày",
      b: "Cáp quang",
      c: "Cáp xoắn có vỏ bọc chống nhiễu",
      d: "Truyền dẫn không dây",
    },
    correct: "b",
  },
  {
    no: 65,
    text: "Độ dài tối đa cho phép khi sử dụng dây cáp mạng UTP là bao nhiêu mét?",
    options: {
      a: "80",
      b: "100",
      c: "150",
      d: "500",
    },
    correct: "b",
  },
  {
    no: 66,
    text: "Phương thức nào mà trong đó cả hai bên đều có thể đồng thời gửi dữ liệu đi:",
    options: {
      a: "Simplex",
      b: "Half – duplex",
      c: "Full – duplex",
      d: "Phương thức khác",
    },
    correct: "c",
  },
  {
    no: 67,
    text: "Đơn vị đo thông lượng là",
    options: {
      a: "Byte/s",
      b: "Bit/s",
      c: "Byte/phút",
      d: "Bit/phút",
    },
    correct: "b",
  },
  {
    no: 68,
    text: "Để kết nối trực tiếp hai máy tính với nhau ta có thể dùng:",
    options: {
      a: "Crossover – Cable",
      b: "Optical Cable",
      c: "Straight Cable",
      d: "Không có loại nào",
    },
    correct: "a",
  },
  {
    no: 69,
    text: "Nếu 4 PCs kết nối với nhau thông qua HUB, cần bao nhiêu địa chỉ IP cho 5 thiết bị mạng này?",
    options: {
      a: "5",
      b: "4",
      c: "2",
      d: "8",
    },
    correct: "b",
  },
  {
    no: 70,
    text: "Thiết bị mạng nào dùng để kết nối các mạng LAN?",
    options: {
      a: "Hub",
      b: "Repeater",
      c: "Switch",
      d: "Router",
    },
    correct: "d",
  },
  {
    no: 71,
    text: "Địa chỉ MAC (Mac address) là:",
    options: {
      a: "Địa chỉ lớp 3 được Router xử lý định tuyến",
      b: "Được phân phát bởi giao thức DHCP",
      c: "Có thể thay đổi bằng Properties của Windows",
      d: "Địa chỉ lớp 2 được gắn cứng vào Card mạng và người dùng không thể thay đổi",
    },
    correct: "d",
  },
  {
    no: 72,
    text: "Khả năng định tuyến được thực hiện bởi thiết bị:",
    options: {
      a: "Switch",
      b: "Hub",
      c: "NIC",
      d: "Router",
    },
    correct: "d",
  },
  {
    no: 73,
    text: "Các dịch vụ quay số Dial-up sử dụng thiết bị nào để chuyển đổi tín hiệu số sang tín hiệu tương tự?",
    options: {
      a: "Repeater",
      b: "Modem",
      c: "Router",
      d: "NIC",
    },
    correct: "b",
  },
  {
    no: 74,
    text: "Tìm phát biểu sai trong các phát biểu sau đây",
    options: {
      a: "Các mạng có dây kết nối với nhau bằng cáp xoắn đôi, cáp đồng trục, cáp quang,… Nó có thể kết nối các máy tính, tivi để tạo thành mạng",
      b: "Các mạng có dây không có khả năng thực hiện các kết nối ở mọi thời điểm, mọi nơi",
      c: "Các mạng không dây kết nối với nhau bằng sóng rađiô, các bức xạ hồng ngoại hay sóng truyền qua vệ tinh thông qua các điểm truy cập không dây WAP. Nó có thể kết nối các máy tính, điện thoại di động để tạo thành mạng",
      d: "Vùng phủ sóng của mạng không dây không bị hạn chế",
    },
    correct: "d",
  },
  {
    no: 75,
    text: "Trong quá trình đóng gói dữ liệu, nếu kích thước của một gói lớn hơn kích thước cho phép thì thực hiện",
    options: {
      a: "Huỷ bỏ gói tin",
      b: "Yêu cầu truyền lại",
      c: "Phân chia thành các gói nhỏ",
      d: "Đóng gói lại gói tin",
    },
    correct: "c",
  },
  {
    no: 76,
    text: "Quá trình chia dữ liệu thành các gói có kích thước quy định gọi là quá trình",
    options: {
      a: "Đóng gói dữ liệu",
      b: "Phân mảnh và hợp nhất gói dữ liệu",
      c: "Phân mảnh và đóng gói dữ liệu",
      d: "Phân mảnh dữ liệu",
    },
    correct: "d",
  },
  {
    no: 77,
    text: "Với mô hình Client/Server thì máy yêu cầu dịch vụ là",
    options: {
      a: "Các Client trên Internet",
      b: "Các Server trên Internet",
      c: "Các Client",
      d: "Các Server của các nhà cung cấp dịch vụ",
    },
    correct: "c",
  },
  {
    no: 78,
    text: "Với mô hình Client/Server thì máy cung cấp dịch vụ là",
    options: {
      a: "Các Server",
      b: "Các Server trên Internet",
      c: "Các Client",
      d: "Các Server của các nhà cung cấp dịch vụ",
    },
    correct: "a",
  },
  {
    no: 79,
    text: "Các thành phần tạo nên mạng là:",
    options: {
      a: "Máy tính, hub, switch",
      b: "Network adapter, cable",
      c: "Protocol",
      d: "Tất cả đều đúng",
    },
    correct: "d",
  },
  {
    no: 80,
    text: "Chọn định nghĩa ĐÚNG về địa chỉ MAC:",
    options: {
      a: "Được ghi sẵn trên card mạng (NIC)",
      b: "Do người quản trị mạng khai báo",
      c: "Câu a và b đúng",
      d: "Tất cả đều sai",
    },
    correct: "a",
  },
  {
    no: 81,
    text: "Khi sử dụng mạng máy tính ta sẽ được các lợi ích:",
    options: {
      a: "Chia sẻ tài nguyên (ổ cứng, cơ sở dữ liệu, máy in, các phần mềm tiện ích, …)",
      b: "Quản lý tập trung",
      c: "Tận dụng năng lực xử lý của các máy tính rỗi kết hợp lại để thực hiện các công việc lớn",
      d: "Tất cả đều đúng",
    },
    correct: "d",
  },
  {
    no: 82,
    text: "Router là 1 thiết bị dùng để:",
    options: {
      a: "Định tuyến giữa các mạng",
      b: "Lọc các gói tin dư thừa",
      c: "Mở rộng một hệ thống mạng",
      d: "Cả 3 đều đúng",
    },
    correct: "a",
  },
  {
    no: 83,
    text: "Môi trường truyền tin thông thường trong mạng máy tính là:",
    options: {
      a: "Các loại cáp như: UTP, STP, cáp điện thoại,...",
      b: "Cáp quang, sóng điện từ,...",
      c: "Tất cả môi trường đang nêu",
      d: "Cáp đồng trục, cáp xoắn, cáp quang",
    },
    correct: "c",
  },
  {
    no: 84,
    text: "Cho biết ứng dụng nào thuộc loại Client/Server:",
    options: {
      a: "WWW (world wide web)",
      b: "Microsoft Word",
      c: "Excel",
      d: "Photoshop",
    },
    correct: "a",
  },
  {
    no: 85,
    text: "Việc nhiều các gói tin bị đụng độ trên mạng sẽ làm cho:",
    options: {
      a: "Hiệu quả truyền thông của mạng tăng lên",
      b: "Hiệu quả truyền thông của mạng kém đi",
      c: "Hiệu quả truyền thông của mạng không thay đổi",
      d: "Phụ thuộc vào các ứng dụng mạng mới tính được hiệu quả.",
    },
    correct: "b",
  },
  {
    no: 86,
    text: "Mạng Internet là sự phát triển của:",
    options: {
      a: "Các hệ thống mạng LAN.",
      b: "Các hệ thống mạng WAN.",
      c: "Các hệ thống mạng Intranet.",
      d: "Cả ba câu đều đúng.",
    },
    correct: "b",
  },
  {
    no: 87,
    text: "Đơn vị của “băng thông là”:",
    options: {
      a: "Bit (b).",
      b: "Volt (V).",
      c: "Bit/second (bps).",
      d: "Ohm (Ω).",
    },
    correct: "c",
  },
  {
    no: 88,
    text: "Để kết nối hai HUB với nhau ta sử dụng kiểu bấm cáp:",
    options: {
      a: "Thẳng (straight-through).",
      b: "Chéo (cross-over).",
      c: "Console.",
      d: "Tất cả đều đúng.",
    },
    correct: "b",
  },
  {
    no: 89,
    text: "Đánh dấu các tầng trong mô hình tham chiếu OSI:",
    options: {
      a: "Tầng liên mạng (Internet layer)",
      b: "Tầng truy cập (Access layer)",
      c: "Tầng liên kết dữ liệu (Datalink layer)",
      d: "Tầng truy cập mạng (Network Access layer)",
    },
    correct: "c",
  },
  {
    no: 90,
    text: "Đơn vị dữ liệu (PDU) tại tầng Datalink là gì?",
    options: {
      a: "Packet",
      b: "Frame",
      c: "Segment",
      d: "Datagram",
    },
    correct: "b",
  },
  {
    no: 91,
    text: "Đơn vị dữ liệu (PDU) tại tầng Network là gì?",
    options: {
      a: "Packet",
      b: "Frame",
      c: "Segment",
      d: "Datagram",
    },
    correct: "a",
  },
  {
    no: 92,
    text: "Đơn vị dữ liệu (PDU) tại tầng Transport là gì?",
    options: {
      a: "Packet",
      b: "Frame",
      c: "Segment",
      d: "Datagram",
    },
    correct: "c",
  },
  {
    no: 93,
    text: "Tầng nào trong mô hình OSI đảm bảo dữ liệu được truyền đi đúng địa chỉ",
    options: {
      a: "Tầng Application",
      b: "Tầng Physical",
      c: "Tầng Transport",
      d: "Tầng Presentation",
    },
    correct: "c",
  },
  {
    no: 94,
    text: "Tầng nào trong mô hình OSI chịu trách nhiệm biên dịch dữ liệu",
    options: {
      a: "Tầng Application",
      b: "Tầng Network",
      c: "Tầng Presentation",
      d: "Tầng Physical",
    },
    correct: "c",
  },
  {
    no: 95,
    text: "Tầng nào trong mô hình OSI chịu trách nhiệm tìm đường đi cho các gói tín?",
    options: {
      a: "Tầng Transport",
      b: "Tầng Network",
      c: "Tầng Datalink",
      d: "Tầng Session",
    },
    correct: "b",
  },
  {
    no: 96,
    text: "Khái niệm nào sau đây không thuộc loại phương tiện truyền dẫn?",
    options: {
      a: "Cáp quang",
      b: "Vệ tinh",
      c: "Frame",
      d: "Tia hồng ngoại",
    },
    correct: "c",
  },
  {
    no: 97,
    text: "Đánh dấu câu đúng",
    options: {
      a: "Cáp xoắn đôi không có vỏ bọc là STP",
      b: "Cáp đồng trục là UTP",
      c: "Cáp quang có 2 loại là Single mode và Multi mode",
      d: "Cáp đồng trục có 2 loại là Single mode và Multi mode",
    },
    correct: "c",
  },
  {
    no: 98,
    text: "Tầng Network tìm ra mạng trên Internet bằng?",
    options: {
      a: "Port number",
      b: "Hardware address",
      c: "Default Gateway",
      d: "MAC address",
    },
    correct: "c",
  },
  {
    no: 99,
    text: "Giao thức nào hoạt động ở tầng Transport",
    options: {
      a: "IP",
      b: "TCP",
      c: "FTP",
      d: "HTTP",
    },
    correct: "b",
  },
  {
    no: 100,
    text: "Giao thức nào hoạt động ở tầng Transport",
    options: {
      a: "IP",
      b: "UCP",
      c: "FTP",
      d: "HTTP",
    },
    correct: "b",
  },
  {
    no: 101,
    text: "Giao thức nào hoạt động ở tầng Network",
    options: {
      a: "IP",
      b: "SNMP",
      c: "FTP",
      d: "HTTP",
    },
    correct: "a",
  },
  {
    no: 102,
    text: "Giao thức nào là giao thức hướng kết nối?",
    options: {
      a: "ICMP",
      b: "UDP",
      c: "TCP",
    },
    correct: "c",
  },
  {
    no: 103,
    text: "Giao thức nào là giao thức không hướng kết nối?",
    options: {
      a: "FTP",
      b: "ICMP",
      c: "TCP",
      d: "HTTPS",
    },
    correct: "b",
  },
  {
    no: 104,
    text: "Đánh dấu cách thức được dùng để phát hiện lỗi",
    options: {
      a: "Cơ chế Sliding Window",
      b: "Cơ chế Stop and Wait",
      c: "Thuật toán CRC",
      d: "Cơ chế Go - back N",
    },
    correct: "c",
  },
  {
    no: 105,
    text: "Đơn vị dữ liệu giao thức trong mô hình OSI được gọi là",
    options: {
      a: "Bit",
      b: "Packet",
      c: "PDU",
      d: "Frame",
    },
    correct: "c",
  },
  {
    no: 106,
    text: "Thứ tự đóng gói dữ liệu khi truyền qua mô hình OSI:",
    options: {
      a: "Data, Packet, Segment, Bit, Frame",
      b: "Data , Packet, Segment, Frame, Bit",
      c: "Data, Segment, Packet, Frame, Bit",
      d: "Data, Segment, Frame, packet, Bit",
    },
    correct: "c",
  },
  {
    no: 107,
    text: "Lớp nào trong mô hình OSI đóng gói dữ liệu kèm theo IP HEADER?",
    options: {
      a: "Physical",
      b: "Data Link",
      c: "Network",
      d: "Transport",
    },
    correct: "c",
  },
  {
    no: 108,
    text: "Tầng hai trong mô hình OSI tách luồng bit từ Tầng vật lý chuyển lên thành:",
    options: {
      a: "Segment",
      b: "Frame",
      c: "Packet",
      d: "PDU",
    },
    correct: "b",
  },
  {
    no: 109,
    text: "Hub là thiết bị hoạt động ở tầng nào của mô hình OSI",
    options: {
      a: "Tầng Vật lý",
      b: "Tầng Data Link",
      c: "Tầng Transport",
      d: "Tầng Network",
    },
    correct: "a",
  },
  {
    no: 110,
    text: "Switch là thiết bị hoạt động ở tầng nào của mô hình OSI:",
    options: {
      a: "Tầng Vật lý",
      b: "Tầng Data Link",
      c: "Tầng Transport",
      d: "Tầng Network",
    },
    correct: "b",
  },
  {
    no: 111,
    text: "Router là thiết bị hoạt động ở tầng nào của mô hình OSI:",
    options: {
      a: "Tầng Vật lý",
      b: "Tầng Data Link",
      c: "Tầng Transport",
      d: "Tầng Network",
    },
    correct: "d",
  },
  {
    no: 112,
    text: "Chọn phát biểu không đúng về vấn đề kiểm soát lỗi",
    options: {
      a: "Tất cả các lỗi đều được phát hiện bởi các phương pháp kiểm soát lỗi",
      b: "Nguyên lý chung là thêm vào tập bit kiểm tra nào đó sao cho bên nhận có thể kiểm soát được",
      c: "Với mã sửa lỗi, cho phép định vị được lỗi nên không cần phải truyền lại",
      d: "Với mã dò lỗi, chỉ phát hiện lỗi nên phải truyền lại",
    },
    correct: "a",
  },
  {
    no: 113,
    text: "Chọn phát biểu không đúng về phương pháp kiểm tra chẵn lẻ",
    options: {
      a: "Các bit parity thêm vào luôn tuân theo qui tắc: là 0 nếu số lượng các bit 1 trong xâu là chẵn và ngược lại là 1 nếu số lượng các bit 1 là lẻ",
      b: "Nguyên lý chung là thêm vào tập bit kiểm tra nào đó sao cho bên nhận có thể kiểm soát được",
      c: "Với mã sửa lỗi, cho phép định vị được lỗi nên không cần phải truyền lại",
      d: "Với mã dò lỗi, chỉ phát hiện lỗi nên phải truyền lại",
    },
    correct: "c",
  },
  {
    no: 114,
    text: "Theo phương pháp CRC, với xâu bit nhận được là T'(x)=1101011011110011 nếu",
    options: {
      a: "G(x)=11011 thì quá trình truyền có lỗi",
      b: "G(x)=1001 thì quá trình truyền không có lỗi",
      c: "G(x)=1101 thì quá trình truyền không có lỗi",
      d: "G(x)=10011 thì quá trình truyền không có lỗi",
    },
    correct: "a",
  },
  {
    no: 115,
    text: "Theo phương pháp CRC, cho G(x)=10111 và xâu gốc M(x)=11100100111 thì xâu truyền đi là",
    options: {
      a: "T(x)= 111001001110010",
      b: "T(x)= 111001001110011",
      c: "T(x)= 111001001110110",
      d: "T(x)= 111001001111010",
    },
    correct: "a",
  },
  {
    no: 116,
    text: "Theo phương pháp CRC, với xâu bit nhận được là T'(x)=110101101111001 nếu",
    options: {
      a: "G(x)=11011 thì quá trình truyền không có lỗi",
      b: "G(x)=1001 thì quá trình truyền không có lỗi",
      c: "G(x)=1101 thì quá trình truyền có lỗi",
      d: "G(x)=10011 thì quá trình truyền không có lỗi",
    },
    correct: "c",
  },
  {
    no: 117,
    text: "Theo phương pháp CRC, cho G(x)=11001 và xâu gốc M(x)=111000110101 thì xâu truyền đi là",
    options: {
      a: "T(x)= 1110001101010100",
      b: "T(x)= 1110001101011100",
      c: "T(x)= 1110001101010101",
      d: "T(x)= 1110001101010110",
    },
    correct: "a",
  },
  {
    no: 118,
    text: "Đối với mã sửa sai Hamming, cho chuỗi gốc là 1000011, chuỗi truyền đi là",
    options: {
      a: "11011011100",
      b: "10010011101",
      c: "11011010101",
      d: "10011001100",
    },
    correct: "b",
  },
  {
    no: 119,
    text: "Đối với mã sửa sai Hamming, cho xâu nhận được là 1010011110011001100, xâu gốc sẽ là",
    options: {
      a: "10100111001001",
      b: "10100111001101",
      c: "10100011001001",
      d: "10100101001001",
    },
    correct: "a",
  },
  {
    no: 120,
    text: "Đối với mã sửa sai Hamming, cho xâu nhận được là 1011100110010000100, xâu gốc sẽ là",
    options: {
      a: "10010011001001",
      b: "10010011000101",
      c: "10010011010001",
      d: "10010011000001",
    },
    correct: "d",
  },
  {
    no: 121,
    text: "Giao thức UDP được sử dụng cho những ứng dụng",
    options: {
      a: "Đòi hỏi độ tin cậy cao",
      b: "Có yêu cầu liên kết",
      c: "Không yêu cầu độ tin cậy cao",
      d: "Yêu cầu kiểm soát luồng và kiểm soát lỗi",
    },
    correct: "c",
  },
  {
    no: 122,
    text: "Tầng nào trong mô hình OSI làm việc với các tín hiệu điện?",
    options: {
      a: "Data Link",
      b: "Network",
      c: "Physical",
      d: "Transport",
    },
    correct: "c",
  },
  {
    no: 123,
    text: "Giao thức nào thuộc tầng Application :",
    options: {
      a: "IP",
      b: "HTTP",
      c: "NFS",
      d: "TCP",
    },
    correct: "b",
  },
  {
    no: 124,
    text: "Phát biểu nào sau đây mô tả đúng nhất cho tầng Application",
    options: {
      a: "Mã hoá dữ liệu",
      b: "Cung cấp những dịch vụ mạng cho những ứng dụng của người dùng",
      c: "Sử dụng địa chỉ vật lý để cung cấp cho việc truyền dữ liệu và thông báo lỗi , kiến trúc mạng và điều khiển việc truyền",
      d: "Cung cấp những tín hiệu điện và những tính năng cho việc liên kết và duy trì liên kết giữa những hệ thống",
    },
    correct: "b",
  },
  {
    no: 125,
    text: "Đơn vị dữ liệu ở tầng presentation là:",
    options: {
      a: "Byte",
      b: "Data",
      c: "Frame",
      d: "Packet",
    },
    correct: "b",
  },
  {
    no: 126,
    text: "Quá trình dữ liệu di chuyển từ hệ thống máy tính này sang hệ thống máy tính khác phải trải qua giai đoạn nào?",
    options: {
      a: "Phân tích dữ liệu",
      b: "Lọc dữ liệu",
      c: "Nén dữ liệu",
      d: "Đóng gói",
    },
    correct: "d",
  },
  {
    no: 127,
    text: "Nhiệm vụ nào dưới đây không phải là của tầng mạng (Network Layer):",
    options: {
      a: "Định địa chỉ logic.",
      b: "Định tuyến.",
      c: "Định địa chỉ vật lý.",
    },
    correct: "c",
  },
  {
    no: 128,
    text: "Phát biểu nào dưới đây là đúng:",
    options: {
      a: "IP là giao thức được cài đặt ở tầng liên kết dữ liệu (Datalink Layer).",
      b: "TCP và HTTP là những giao thức được cài đặt ở tầng giao vận (Transport Layer).",
      c: "SMTP và PPP là những giao thức được cài đặt ở tầng vật lý (Physical Layer).",
      d: "TCP/IP là giao thức được cài đặt ở tầng ứng dụng (Application Layer).",
      e: "Telnet, HTTP, SMTP, FTP là những giao thức được cài đặt ở tầng ứng dụng (Application Layer).",
    },
    correct: "e",
  },
  {
    no: 129,
    text: "Đánh dấu các tầng trong mô hình tham chiếu TCP/IP",
    options: {
      a: "Tầng liên mạng (Internet layer)",
      b: "Tầng truy cập (Access layer)",
      c: "Tầng liên kết dữ liệu (Datalink layer)",
      d: "Tầng phiên (Session layer)",
    },
    correct: "a",
  },
  {
    no: 130,
    text: "Địa chỉ IP gồm bao nhiêu bit?",
    options: {
      a: "16",
      b: "32",
      c: "48",
      d: "64",
    },
    correct: "b",
  },
  {
    no: 131,
    text: "Dịch vụ nào cho phép người sử dụng từ một trạm làm việc của mình có thể đăng nhập vào một trạm ở xa qua mạng và có thể làm việc với hệ thống:",
    options: {
      a: "Telnet",
      b: "Email",
      c: "FTP",
      d: "WWW",
    },
    correct: "a",
  },
  {
    no: 132,
    text: "Trong mô hình TCP/IP thì giao thức IP nằm ở tầng:",
    options: {
      a: "Application",
      b: "Transport",
      c: "Internet",
      d: "Network Access",
    },
    correct: "c",
  },
  {
    no: 133,
    text: "Dịch vụ mạng DNS dùng để:",
    options: {
      a: "Cấp địa chỉ cho máy",
      b: "Phân giải tên, địa chỉ",
      c: "Truyền file và dữ liệu",
      d: "Gửi thư điện tử",
    },
    correct: "b",
  },
  {
    no: 134,
    text: "Một mạng con lớp C mượn 2 bit để chia Subnet thì Subnet Mask sẽ là:",
    options: {
      a: "255.255.224.0",
      b: "255.255.255.192",
      c: "255.255.255.240",
      d: "255.255.255.128",
    },
    correct: "b",
  },
  {
    no: 135,
    text: "Địa chỉ nào sau đây là địa chỉ quảng bá (broadcast) của mạng 192.168.25.128/28:",
    options: {
      a: "192.168.25.255",
      b: "192.168.25.141",
      c: "192.168.25.180",
      d: "192.168.25.143",
    },
    correct: "d",
  },
  {
    no: 136,
    text: "Một mạng con lớp C mượn 5 bit để chia Subnet thì Subnet Mask sẽ là:",
    options: {
      a: "255.255.224.0",
      b: "255.255.255.1",
      c: "255.255.255.248",
      d: "255.255.255.128",
    },
    correct: "c",
  },
  {
    no: 137,
    text: "Một mạng con lớp A mượn 21 bit để chia Subnet thì Subnet Mask sẽ là:",
    options: {
      a: "255.255.224.0",
      b: "255..255.192.0",
      c: "255.255.248.0",
      d: "255.255.255.248",
    },
    correct: "a",
  },
  {
    no: 138,
    text: "Địa chỉ nào trong số những địa chỉ dưới đây là địa chỉ Broadcast của lớp C?",
    options: {
      a: "190.12.253.255",
      b: "190.44.255.255",
      c: "221.218.253.255",
      d: "129.219.145.255",
    },
    correct: "a",
  },
  {
    no: 139,
    text: "Số nhị phân nào dưới đây có giá trị là 164?",
    options: {
      a: "10010010",
      b: "11000100",
      c: "10100100",
      d: "10101010",
    },
    correct: "c",
  },
  {
    no: 140,
    text: "Giao thức nào dùng để tìm địa chỉ IP khi biết địa chỉ MAC của máy tính?",
    options: {
      a: "TCP/IP",
      b: "DHCP",
      c: "ARP",
      d: "RARP",
    },
    correct: "d",
  },
  {
    no: 141,
    text: "Giao thức nào dưới đây không đảm bảo dữ liệu gửi đi có tới máy nhận hoàn chỉnh hay không?",
    options: {
      a: "TCP",
      b: "UDP",
      c: "ARP",
      d: "RARP",
    },
    correct: "b",
  },
  {
    no: 142,
    text: "Địa chỉ IP nào sau đây không được dùng để kết nối trực tiếp trong mạng Internet:",
    options: {
      a: "126.0.0.1",
      b: "192.168.1.1",
      c: "200.100.1.1",
      d: "Tất cả đều không được dùng cho kết nối trực tiếp trong mạng Internet",
    },
    correct: "b",
  },
  {
    no: 143,
    text: "Trong mạng máy tính dùng giao thức TCP/IP và Subnet Mask là 255.255.255.224, hãy xác định địa chỉ broadcast của mạng nếu biết rằng một máy tính trong mạng có địa chỉ 192.168.1.1:",
    options: {
      a: "192.168.1.31",
      b: "192.168.1.255",
      c: "192.168.1.15",
      d: "192.168.1.96",
    },
    correct: "a",
  },
  {
    no: 144,
    text: "Byte đầu tiên của một địa chỉ IP có dạng: 11011011. Vậy nó thuộc lớp nào:",
    options: {
      a: "Lớp A",
      b: "Lớp B",
      c: "Lớp C",
      d: "Lớp D",
    },
    correct: "c",
  },
  {
    no: 145,
    text: "Số nhị phân 01111100 có giá trị thập phân là:",
    options: {
      a: "118",
      b: "120",
      c: "124",
      d: "126",
    },
    correct: "c",
  },
  {
    no: 146,
    text: "Lấy 1 địa chỉ lớp B để chia Subnet với Netmask 255.255.240.0, có bao nhiêu Subnets sử dụng được?",
    options: {
      a: "2",
      b: "6",
      c: "16",
      d: "30",
    },
    correct: "c",
  },
  {
    no: 147,
    text: "Một mạng lớp C cần chia thành 9 mạng con sử dụng Subnet Mask nào sau đây:",
    options: {
      a: "255.255.255.224",
      b: "255.0.0.255",
      c: "255.224.255.0",
      d: "255.255.255.240",
    },
    correct: "a",
  },
  {
    no: 148,
    text: "Subnet Mask nào sau đây là hợp lệ:",
    options: {
      a: "0.255.255.255",
      b: "0.0.0.255",
      c: "255.0.0.255",
      d: "255.255.255.0",
    },
    correct: "d",
  },
  {
    no: 149,
    text: "Trong địa chỉ IP, có 5 lớp A, B, C, D, E. Lớp B là lớp có dãy địa chỉ:",
    options: {
      a: "192.0.0.0 tới 223.255.255.255",
      b: "240.0.0.0 tới 255.255.255.255",
      c: "128.0.0.0 tới 191.255.255.255",
      d: "224.0.0.0 tới 239.255.255.255",
    },
    correct: "c",
  },
  {
    no: 150,
    text: "Dịch vụ mạng SMTP dùng để:",
    options: {
      a: "Gửi thư điện tử",
      b: "Nhận thư điện tử",
      c: "Phân giải tên, địa chỉ",
      d: "Cấp địa chỉ cho máy",
    },
    correct: "a",
  },
  {
    no: 151,
    text: "Hãy chỉ ra địa chỉ IP của host không hợp lệ với Subnet Mask = 255.255.255.224",
    options: {
      a: "222.81.22.104",
      b: "222.88.65.135",
      c: "222.81.56.130",
      d: "222.81.55.128",
    },
    correct: "d",
  },
  {
    no: 152,
    text: "Cần chia mạng con thuộc Class B với mỗi Subnet có tối đa 500 host, phải dùng Subnet Mask:",
    options: {
      a: "11111111.11111111.11111110.00000000",
      b: "11111111.11111111.11111111.00000000",
      c: "11111111.11111111.11111100.00000000",
      d: "11111111.11111111.11111111.11000000",
    },
    correct: "c",
  },
  {
    no: 153,
    text: "Một mạng thuộc Class B với Subnet Mask là 255.255.252.0 có thể chia thành bao nhiêu Subnet?",
    options: {
      a: "16",
      b: "32",
      c: "64",
      d: "128",
    },
    correct: "a",
  },
  {
    no: 154,
    text: "Chỉ ra nút mạng cùng Subnet với nút mạng có IP 217.65.82.153 và Subnet Mask 255.255.255.248:",
    options: {
      a: "217.65.82.156",
      b: "217.65.82.151",
      c: "217.65.82.152",
      d: "217.65.82.160",
    },
    correct: "c",
  },
  {
    no: 155,
    text: "Một mạng lớp B cần chia thành 9 mạng con, phải sử dụng Subnet Mask:",
    options: {
      a: "255.255.224.0",
      b: "255.0.0.255",
      c: "255.255.240.0",
      d: "255.255.255.224",
    },
    correct: "c",
  },
  {
    no: 156,
    text: "Một mạng con lớp C cần chứa 15 host, sử dụng Subnet Mask nào sau đây:",
    options: {
      a: "255.255.255.224",
      b: "255.0.0.255",
      c: "255.255.255.240",
      d: "255.255.255.192",
    },
    correct: "c",
  },
  {
    no: 157,
    text: "Địa chỉ nào sau đây là địa chỉ quảng bá của mạng 192.168.25.128/27",
    options: {
      a: "192.168.25.255",
      b: "192.168.25.128",
      c: "192.168.25.159",
      d: "192.168.25.100",
    },
    correct: "c",
  },
  {
    no: 158,
    text: "Một mạng con lớp A mượn 5 bit để chia Subnet thì Subnet Mask sẽ là:",
    options: {
      a: "255.255.255.248",
      b: "255.248.255.255",
      c: "255.248.255.0",
      d: "255.248.0.0",
    },
    correct: "d",
  },
  {
    no: 159,
    text: "Cho địa chỉ IP 192.168.25.91/26, số mạng con và số host tối đa của mỗi mạng con sẽ là:",
    options: {
      a: "62 và 4",
      b: "4 và 62",
      c: "4 và 64",
      d: "64 và 4",
    },
    correct: "b",
  },
  {
    no: 160,
    text: "Thứ tự các lớp tính từ trên xuống trong mô hình TCP/IP là:",
    options: {
      a: "Internet - Network Access - Transport – Application",
      b: "Application - Internet - Transport - Network Access",
      c: "Application - Transport - Internet - Network Access",
      d: "Transport - Internet - Network Access – Application",
    },
    correct: "c",
  },
  {
    no: 161,
    text: "Địa chỉ IP nào thuộc lớp B",
    options: {
      a: "127.160.73.114",
      b: "192.160.19.25",
      c: "126.160.158.19",
      d: "191.160.9.134",
    },
    correct: "d",
  },
  {
    no: 162,
    text: "Địa chỉ IP nào thuộc lớp C",
    options: {
      a: "191.160.73.14",
      b: "223.160.9.25",
      c: "224.160.58.19",
      d: "190.160.9.34",
    },
    correct: "b",
  },
  {
    no: 163,
    text: "Địa chỉ IP nào thuộc lớp A",
    options: {
      a: "190.16.73.114",
      b: "127.116.39.25",
      c: "126.160.158.19",
      d: "128.115.91.34",
    },
    correct: "c",
  },
  {
    no: 164,
    text: "Để cấp phát động địa chỉ IP, ta có thể sử dụng dịch vụ có giao thức nào?:",
    options: {
      a: "Dùng giao thức DHCP",
      b: "Dùng giao thức FTP",
      c: "Dùng giao thức DNS",
      d: "Dùng giao thức HTTP",
    },
    correct: "a",
  },
  {
    no: 165,
    text: "Địa chỉ IP 192.168.1.1 là",
    options: {
      a: "Thuộc lớp B",
      b: "Thuộc lớp C",
      c: "Là địa chỉ riêng",
      d: "Thuộc lớp C và là địa chỉ riêng",
    },
    correct: "d",
  },
  {
    no: 166,
    text: "Trong các địa chỉ sau, chọn địa chỉ không nằm cùng đường mạng với các địa chỉ còn lại:",
    options: {
      a: "203.29.100.100/255.255.255.240",
      b: "203.29.100.110/255.255.255.240",
      c: "203.29.103.113/255.255.255.240",
      d: "203.29.100.98/255.255.255.240",
    },
    correct: "c",
  },
  {
    no: 167,
    text: "Địa chỉ nào sau đây là địa chỉ broadcast của mạng lớp B là",
    options: {
      a: "14.255.255.255",
      b: "149.6.255.255",
      c: "149.6.7.255",
      d: "Tất cả đều sai",
    },
    correct: "b",
  },
  {
    no: 168,
    text: "Giá trị của 11101101 ở cơ số 2 trong cơ số 16 là",
    options: {
      a: "CB",
      b: "ED",
      c: "CF",
      d: "EC",
    },
    correct: "b",
  },
  {
    no: 169,
    text: "Giao thức FTP sử dụng cổng dịch vụ số (chọn 2):",
    options: {
      a: "20",
      b: "21",
      c: "25",
      d: "53",
    },
    correct: ["a", "b"],
  },
  {
    no: 170,
    text: "Giao thức SMTP sử dụng cổng dịch vụ số",
    options: {
      a: "110",
      b: "23",
      c: "25",
      d: "53",
    },
    correct: "c",
  },
  {
    no: 171,
    text: "Giao thức POP3 sử dụng cổng dịch vụ số:",
    options: {
      a: "110",
      b: "23",
      c: "25",
      d: "53",
    },
    correct: "a",
  },
  {
    no: 172,
    text: "Subnet mask trong một cổng serial của router là 11111000. Số thập phân của nó là:",
    options: {
      a: "210",
      b: "224",
      c: "240",
      d: "248",
    },
    correct: "d",
  },
  {
    no: 173,
    text: "Những địa chỉ nào sau đây được chọn cho những host trong subnet 192.168.15.19/28?",
    options: {
      a: "192.168.15.17",
      b: "192.168.15.14",
      c: "192.168.15.16",
      d: "192.168.15.31",
    },
    correct: "a",
  },
  {
    no: 174,
    text: "Bạn có một địa chỉ lớp C, và bạn cần 10 subnets. Bạn muốn mình có nhiều địa chỉ cho mỗi mạng. Vậy bạn chọn subnet mask nào sau đây:",
    options: {
      a: "255.255.255.192",
      b: "255.255.255.224",
      c: "255.255.255.240",
      d: "255.255.255.248",
    },
    correct: "b",
  },
  {
    no: 175,
    text: "Những địa chỉ nào sau đây có thể được gán trong mạng 27.35.16.32 255.0.0.0",
    options: {
      a: "28.35.16.32",
      b: "27.35.16.33",
      c: "29.35.16.47",
      d: "26.35.16.45",
    },
    correct: "b",
  },
  {
    no: 176,
    text: "Những địa chỉ nào sau đây có thể được gán trong mạng 27.35.16.32 255.0.0.0",
    options: {
      a: "28.35.16.32",
      b: "27.35.16.48",
      c: "29.35.16.47",
      d: "26.35.16.45",
    },
    correct: "b",
  },
  {
    no: 177,
    text: "Những địa chỉ nào sau đây có thể được gán trong mạng 27.35.16.32 với subnet mask 255.0.0.0",
    options: {
      a: "28.35.16.32",
      b: "27.0. 16.44",
      c: "29.35.16.47",
      d: "26.35.16.45",
    },
    correct: "b",
  },
  {
    no: 178,
    text: "Những địa chỉ nào sau đây là địa chỉ public",
    options: {
      a: "10.255.255.254",
      b: "203.162.4.190",
      c: "172.16.0.1",
      d: "192.168.1.1",
    },
    correct: "b",
  },
  {
    no: 179,
    text: "Những địa chỉ nào sau đây là địa chỉ public",
    options: {
      a: "10.255.255.254",
      b: "222.166.1.254",
      c: "172.16.0.1",
      d: "192.168.1.1",
    },
    correct: "b",
  },
  {
    no: 180,
    text: "Những địa chỉ nào sau đây là địa chỉ public",
    options: {
      a: "10.255.255.254",
      b: "128.10.1.254",
      c: "172.16.0.1",
      d: "192.168.1.1",
    },
    correct: "b",
  },
  {
    no: 181,
    text: "Những địa chỉ nào sau đây là địa chỉ private",
    options: {
      a: "15.0.0.1",
      b: "10.1.1.1",
      c: "172.32.1.1",
      d: "192.169.254.1",
    },
    correct: "b",
  },
  {
    no: 182,
    text: "Những địa chỉ nào sau đây là địa chỉ private",
    options: {
      a: "15.0.0.1",
      b: "172.16.1.1",
      c: "172.32.1.1",
      d: "192.169.254.1",
    },
    correct: "b",
  },
  {
    no: 183,
    text: "Những địa chỉ nào sau đây là địa chỉ private",
    options: {
      a: "15.0.0.1",
      b: "192.168.108.1",
      c: "172.32.1.1",
      d: "192.169.254.1",
    },
    correct: "b",
  },
  {
    no: 184,
    text: "Từ CD trong CSMA / CD là viết tắt của từ gì?",
    options: {
      a: "Compaq Disk",
      b: "Collision Domain",
      c: "Collision Detection",
      d: "Compaq Driver",
    },
    correct: "c",
  },
  {
    no: 185,
    text: "CD trong CSMA / CD có nghĩa là gì?",
    options: {
      a: "Nghe ngóng đường truyền - luôn kiểm tra trạng thái kênh truyền bận hay rỗi.",
      b: "Phát hiện đụng độ trên đường truyền",
      c: "Đa truy cập – Nhiều thiết bị có thể gửi và nhận tín hiệu trên đường truyền",
      d: "Gửi và nhận đồng thời 2 chiều trên 1 kênh truyền vật lý",
    },
    correct: "b",
  },
  {
    no: 186,
    text: "CS trong CSMA / CD có nghĩa là gì?",
    options: {
      a: "Nghe ngóng đường truyền - luôn kiểm tra trạng thái kênh truyền bận hay rỗi.",
      b: "Phát hiện đụng độ trên đường truyền",
      c: "Đa truy cập – Nhiều thiết bị có thể gửi và nhận tín hiệu trên đường truyền",
      d: "Gửi và nhận đồng thời 2 chiều trên 1 kênh truyền vật lý",
    },
    correct: "a",
  },
  {
    no: 187,
    text: "MA trong CSMA / CD có nghĩa là gì?",
    options: {
      a: "Nghe ngóng đường truyền - luôn kiểm tra trạng thái kênh truyền bận hay rỗi.",
      b: "Phát hiện đụng độ trên đường truyền",
      c: "Đa truy cập – Nhiều thiết bị có thể gửi và nhận tín hiệu trên đường truyền",
      d: "Gửi và nhận đồng thời 2 chiều trên 1 kênh truyền vật lý",
    },
    correct: "c",
  },
  {
    no: 188,
    text: "Trong CSMA, khi có đụng độ trên đường truyền, các máy trạm sẽ",
    options: {
      a: "Tiếp tục truyền bởi vì đụng độ sẽ xảy ra trong thời gian ngắn",
      b: "Tạm thời dừng lại trong 1 khoảng thời gian ngẫu nhiên",
      c: "Không tham gia vào đường truyền cho tới khi người quản trị cấu hình lại các thông số",
      d: "Thử truyền 1 vài bit dữ liệu để kiểm tra đường truyền",
    },
    correct: "b",
  },
  {
    no: 189,
    text: "Trong từ “Mạng 4G” thì G là viết tắt của từ gì?",
    options: {
      a: "Global",
      b: "General",
      c: "Generation",
      d: "Group",
    },
    correct: "c",
  },
  {
    no: 190,
    text: "Phát biểu nào sau đây đúng ?",
    options: {
      a: "Wifi và Wireless là một",
      b: "Mạng Wifi là một công nghệ của Wireless",
      c: "Mạng Wireless là một dạng của mạng Wifi",
      d: "Wifi và Wireless là hai chuẩn mạng không dây khác nhau",
    },
    correct: "b",
  }
];


// ===============================
// 2) DOM HELPERS
// ===============================
function mustGet(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element with id="${id}". Check your index.html.`);
  return el;
}

// ===============================
// 3) ELEMENTS
// ===============================
const qNoEl = mustGet("qNo");
const qTextEl = mustGet("qText");
const optionsEl = mustGet("options");
const feedbackEl = mustGet("feedback");
const progressTextEl = mustGet("progressText");
const scoreTextEl = mustGet("scoreText");
const progressBarEl = mustGet("progressBar");

const backBtn = mustGet("backBtn");
const nextBtn = mustGet("nextBtn");
const restartBtn = mustGet("restartBtn");

// ===============================
// 4) UTILITIES
// ===============================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalizeKey(k) {
  // Make option keys consistent: "A" -> "a"
  return String(k).trim().toLowerCase();
}

function normalizeCorrect(correct) {
  // correct: "c" or "C" or ["a","b"]
  if (Array.isArray(correct)) return correct.map(normalizeKey);
  return normalizeKey(correct);
}

function getOptionEntries(optionsObj) {
  // Convert options object -> [{key:"a", text:"..."}, ...] in stable order by key
  const entries = Object.entries(optionsObj || {})
    .map(([k, v]) => ({ key: normalizeKey(k), text: String(v) }))
    .filter((x) => x.text && x.text.trim().length > 0);

  // sort by key so original order is consistent before shuffle
  entries.sort((x, y) => x.key.localeCompare(y.key));
  return entries;
}

function isValidQuestion(q) {
  if (!q || typeof q !== "object") return false;
  if (typeof q.text !== "string" || !q.text.trim()) return false;

  const entries = getOptionEntries(q.options);
  if (entries.length < 2) return false; // must have at least 2 options

  const c = normalizeCorrect(q.correct);
  if (Array.isArray(c)) {
    if (c.length < 1) return false;
    // every correct must exist in options
    return c.every((k) => entries.some((e) => e.key === k));
  } else {
    return entries.some((e) => e.key === c);
  }
}

// Shuffle choices by TEXT, and remap correct key(s) accordingly
function buildShuffledQuestion(q) {
  const entries = getOptionEntries(q.options); // [{key:"a", text:"..."}, ...]
  const correct = normalizeCorrect(q.correct); // "c" or ["a","b"]

  // shuffle by entries (keeps key+text together)
  const shuffled = shuffle(entries);

  // rebuild options with NEW display letters A/B/C/D/E...
  const displayLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const options = {};        // {A:"...",B:"...",...}
  const mapOldKeyToNewLabel = {}; // {a:"C", b:"A", ...}

  shuffled.forEach((item, idx) => {
    const L = displayLabels[idx];
    options[L] = item.text;
    mapOldKeyToNewLabel[item.key] = L;
  });

  // remap correct into NEW display labels
  let newCorrect;
  if (Array.isArray(correct)) {
    newCorrect = correct.map((k) => mapOldKeyToNewLabel[k]).filter(Boolean);
  } else {
    newCorrect = mapOldKeyToNewLabel[correct];
  }

  return {
    no: q.no ?? "",
    text: q.text,
    options,       // keys now are A/B/C/D/E...
    correct: newCorrect, // "A" or ["A","B"]
    multi: Array.isArray(newCorrect) && newCorrect.length > 1,
  };
}

// ===============================
// 5) GAME STATE
// ===============================
let playList = [];     // shuffled question order + shuffled options
let userAnswers = [];  // per playList index: { chosen: "A" or ["A","B"], isCorrect }
let index = 0;
let score = 0;

// for multi-select question
let tempSelected = new Set();

// ===============================
// 6) INIT / START (RANDOM BOTH)
// ===============================
function startRandomAll() {
  const valid = questions.filter(isValidQuestion);

  if (valid.length === 0) {
    qNoEl.textContent = "";
    qTextEl.textContent = "No valid questions found. Please check options/correct format.";
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
    progressTextEl.textContent = "Question 0/0";
    scoreTextEl.textContent = "Score: 0";
    progressBarEl.style.width = "0%";
    backBtn.disabled = true;
    nextBtn.disabled = true;
    restartBtn.disabled = false;
    return;
  }

  // 1) Random order of questions
  const randomQuestions = shuffle(valid);

  // 2) Shuffle choices for each question
  playList = randomQuestions.map(buildShuffledQuestion);

  // Reset state
  index = 0;
  score = 0;
  userAnswers = new Array(playList.length).fill(null);
  tempSelected = new Set();

  render();
}

// ===============================
// 7) RENDER
// ===============================
function render() {
  const q = playList[index];
  tempSelected = new Set();

  qNoEl.textContent = q.no ? `Câu ${q.no}` : `Câu ${index + 1}`;
  qTextEl.textContent = q.text;

  progressTextEl.textContent = `Question ${index + 1}/${playList.length}`;
  scoreTextEl.textContent = `Score: ${score}`;

  const pct = ((index + 1) / playList.length) * 100;
  progressBarEl.style.width = `${pct}%`;

  backBtn.disabled = index === 0;
  nextBtn.disabled = index === playList.length - 1;

  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";

  const labels = Object.keys(q.options); // A/B/C/...
  labels.forEach((L) => {
    const btn = document.createElement("button");
    btn.className = "opt";
    btn.type = "button";
    btn.dataset.letter = L;
    btn.innerHTML = `
      <span class="badge">${L}</span>
      <span class="label">${q.options[L]}</span>
    `;

    btn.addEventListener("click", () => {
      if (q.multi) toggleMulti(L);
      else chooseSingle(L);
    });

    optionsEl.appendChild(btn);
  });

  // Multi question: add Submit button
  if (q.multi) {
    const submit = document.createElement("button");
    submit.className = "btn";
    submit.type = "button";
    submit.id = "submitMultiBtn";
    submit.textContent = "Submit";
    submit.addEventListener("click", submitMulti);
    const wrap = document.createElement("div");
    wrap.className = "controls";
    wrap.appendChild(submit);
    optionsEl.appendChild(wrap);
  }

  // If already answered, show state again
  const prev = userAnswers[index];
  if (prev) {
    if (Array.isArray(prev.chosen)) lockOptionsAndShowMulti(prev.chosen);
    else lockOptionsAndShowSingle(prev.chosen);
  }
}

// ===============================
// 8) ANSWER LOGIC (SINGLE)
// ===============================
function chooseSingle(letter) {
  if (userAnswers[index]) return;

  const q = playList[index];
  const correct = q.correct; // string "A"
  const isCorrect = letter === correct;

  userAnswers[index] = { chosen: letter, isCorrect };
  if (isCorrect) score += 1;

  lockOptionsAndShowSingle(letter);
}

function lockOptionsAndShowSingle(chosen) {
  const q = playList[index];
  const correct = q.correct;

  const buttons = optionsEl.querySelectorAll(".opt");
  buttons.forEach((btn) => {
    btn.disabled = true;
    const L = btn.dataset.letter;

    if (L === chosen && L !== correct) btn.classList.add("wrong");
    if (L === correct) btn.classList.add("correct");
  });

  if (chosen === correct) {
    feedbackEl.textContent = "Right ✅";
    feedbackEl.classList.add("ok");
  } else {
    feedbackEl.textContent = "Understand ✅";
    feedbackEl.classList.add("bad");
  }

  scoreTextEl.textContent = `Score: ${score}`;
}

// ===============================
// 9) ANSWER LOGIC (MULTI: choose 2+)
// ===============================
function toggleMulti(letter) {
  if (userAnswers[index]) return;

  const btn = optionsEl.querySelector(`.opt[data-letter="${letter}"]`);
  if (!btn) return;

  if (tempSelected.has(letter)) {
    tempSelected.delete(letter);
    btn.classList.remove("wrong"); // just visual select mark reuse
    btn.style.outline = "none";
  } else {
    tempSelected.add(letter);
    btn.style.outline = "2px solid rgba(255,255,255,0.35)";
    btn.style.outlineOffset = "2px";
  }
}

function submitMulti() {
  if (userAnswers[index]) return;

  const q = playList[index];
  const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
  const chosenArr = Array.from(tempSelected).sort();
  const correctSorted = [...correctArr].sort();

  const isCorrect =
    chosenArr.length === correctSorted.length &&
    chosenArr.every((x, i) => x === correctSorted[i]);

  userAnswers[index] = { chosen: chosenArr, isCorrect };
  if (isCorrect) score += 1;

  lockOptionsAndShowMulti(chosenArr);
}

function lockOptionsAndShowMulti(chosenArr) {
  const q = playList[index];
  const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];

  const buttons = optionsEl.querySelectorAll(".opt");
  buttons.forEach((btn) => {
    btn.disabled = true;
    btn.style.outline = "none";

    const L = btn.dataset.letter;
    const chosen = chosenArr.includes(L);
    const correct = correctArr.includes(L);

    if (correct) btn.classList.add("correct");
    else if (chosen && !correct) btn.classList.add("wrong");
  });

  // disable submit
  const submitBtn = document.getElementById("submitMultiBtn");
  if (submitBtn) submitBtn.disabled = true;

  const isCorrect = userAnswers[index]?.isCorrect;

  if (isCorrect) {
    feedbackEl.textContent = "Right ✅";
    feedbackEl.classList.add("ok");
  } else {
    feedbackEl.textContent = "Understand ✅";
    feedbackEl.classList.add("bad");
  }

  scoreTextEl.textContent = `Score: ${score}`;
}

// ===============================
// 10) NAVIGATION
// ===============================
backBtn.addEventListener("click", () => {
  if (index > 0) {
    index -= 1;
    render();
  }
});

nextBtn.addEventListener("click", () => {
  if (index < playList.length - 1) {
    index += 1;
    render();
  }
});

restartBtn.addEventListener("click", () => {
  startRandomAll(); // re-random both
});

// ===============================
// 11) START
// ===============================
startRandomAll();