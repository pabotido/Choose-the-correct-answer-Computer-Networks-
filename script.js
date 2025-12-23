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
      text: "Theo quan điểm duy vật biện chứng: Nhận thức là quá trình phản ánh hiện thực khách quan vào bộ óc con người như thế nào?",
      options: {
        a: "Mơ hồ",
        b: "Nguyên xi",
        c: "Thụ động",
        d: "Tích cực, chủ động, sáng tạo"
      },
      correct: "d"
    },
  {
    no: 2,
    text: "Vật chất là gì?",
    options: {
      a: "Một phạm trù triết học",
      b: "Khái niệm",
      c: "Định nghĩa",
      d: "Quan niệm"
    },
    correct: "a"
  },
  {
    no: 3,
    text: "Định nghĩa vật chất của V.I. Lenin có ý nghĩa như thế nào?",
    options: {
      a: "Giải quyết hai mặt vấn đề của triết học, cung cấp nguyên tắc thế giới quan và phương pháp luận khoa học, là cơ sở cho việc xác định vật chất trong lĩnh vực xã hội",
      b: "Giải quyết hai mặt vấn đề của triết học",
      c: "Cung cấp nguyên tắc thế giới quan và phương pháp luận khoa học",
      d: "Là cơ sở cho việc xác định vật chất trong lĩnh vực xã hội"
    },
    correct: "a"
  },
  {
    no: 4,
    text: "Các hình thức tồn tại của vật chất là gì?",
    options: {
      a: "Vận động, không gian và thời gian",
      b: "Không gian và thời gian",
      c: "Chiều dài lịch sử",
      d: "Không gian bao la của vũ trụ"
    },
    correct: "a"
  },
  {
    no: 5,
    text: "Ph. Ăngghen đã chia vận động thành mấy loại?",
    options: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correct: "d"
  },
  {
    no: 6,
    text: "Nguồn gốc tự nhiên của ý thức bao gồm?",
    options: {
      a: "Bộ óc con người và thế giới khách quan",
      b: "Thế giới khách quan",
      c: "Ngôn ngữ và bộ óc con người",
      d: "Bộ óc con người và lao động"
    },
    correct: "a"
  },
  {
    no: 7,
    text: "Nguồn gốc xã hội của ý thức gồm?",
    options: {
      a: "Ngôn ngữ và lao động",
      b: "Lao động",
      c: "Bộ óc con người",
      d: "Thế giới khách quan"
    },
    correct: "a"
  },
  {
    no: 8,
    text: "Cơ sở của sự tồn tại và phát triển là?",
    options: {
      a: "Sản xuất vật chất",
      b: "Sản xuất xã hội",
      c: "Sản xuất con người",
      d: "Sản xuất tinh thần"
    },
    correct: "a"
  },
  {
    no: 9,
    text: "Yếu tố quan trọng nhất quyết định sự hình thành và phát triển của xã hội loài người là?",
    options: {
      a: "Điều kiện tự nhiên, hoàn cảnh địa lý",
      b: "Dân số và mật độ dân cư",
      c: "Phương thức sản xuất",
      d: "Chính sách xã hội"
    },
    correct: "c"
  },
  {
    no: 10,
    text: "Lực lượng sản xuất bao gồm?",
    options: {
      a: "Người lao động và tư liệu sản xuất",
      b: "Đối tượng lao động và tư liệu lao động",
      c: "Công cụ lao động và tư liệu lao động",
      d: "Lao động trí óc và lao động chân tay"
    },
    correct: "a"
  },
  {
    no: 11,
    text: "Nhân tố hàng đầu giữ vai trò quan trọng của lực lượng sản xuất là?",
    options: {
      a: "Nhân tố con người",
      b: "Tư liệu sản xuất",
      c: "Công cụ lao động",
      d: "Đối tượng lao động"
    },
    correct: "a"
  },
  {
    no: 12,
    text: "Trong lực lượng sản xuất yếu tố quan trọng cơ bản quyết định năng suất lao động là?",
    options: {
      a: "Con người",
      b: "Công cụ lao động",
      c: "Đối tượng lao động",
      d: "Phương pháp lao động"
    },
    correct: "a"
  },
  {
    no: 13,
    text: "Quan hệ sản xuất bao gồm?",
    options: {
      a: "Quan hệ sở hữu đối với tư liệu sản xuất, quan hệ tổ chức quản lý, quan hệ phân phối sản phẩm lao động",
      b: "Quan hệ trong tổ chức quản lý trao đổi, quan hệ buôn bán",
      c: "Quan hệ về phân phối sản phẩm lao động, quan hệ quản lý trao đổi",
      d: "Quan hệ sở hữu đối với tư liệu sản xuất, quan hệ phân phối sản phẩm lao động"
    },
    correct: "a"
  },
  {
    no: 14,
    text: "Quy luật nào là hạt nhân của phép biện chứng?",
    options: {
      a: "Quy luật thống nhất và đấu tranh giữa các mặt đối lập",
      b: "Quy luật phủ định của phủ định",
      c: "Quy luật từ những thay đổi về lượng dẫn tới sự thay đổi về chất và ngược lại",
      d: "Quy luật nhân quả"
    },
    correct: "a"
  },
  {
    no: 15,
    text: "Quy luật nào chỉ ra cách thức chung nhất của sự vận động và phát triển?",
    options: {
      a: "Quy luật thống nhất và đấu tranh giữa các mặt đối lập",
      b: "Quy luật phủ định của phủ định",
      c: "Quy luật từ những thay đổi về lượng dẫn tới sự thay đổi về chất và ngược lại",
      d: "Quy luật nhân quả"
    },
    correct: "c"
  },
  {
    no: 16,
    text: "Cái chung được hiểu là?",
    options: {
      a: "Phạm trù triết học dùng để chỉ một sự vật, hiện tượng nhất định",
      b: "Phạm trù triết học dùng để chỉ các mặt, các đặc điểm vốn có ở một sự vật",
      c: "Phạm trù triết học dùng để chỉ những mặt, những thuộc tính chung của nhiều sự vật hiện tượng mà còn có ở nhiều sự vật hiện tượng khác",
      d: "Cả 3 đáp án đều sai"
    },
    correct: "c"
  },
  {
    no: 17,
    text: "Cái đơn nhất được hiểu là?",
    options: {
      a: "Phạm trù triết học dùng để chỉ một sự vật, hiện tượng nhất định",
      b: "Phạm trù triết học dùng để chỉ các mặt, các đặc điểm vốn có ở một sự vật, hiện tượng nào đó mà không lặp lại ở sự vật khác",
      c: "Phạm trù triết học dùng để chỉ những mặt, những thuộc tính chung của nhiều sự vật",
      d: "Cả 3 đáp án đều sai"
    },
    correct: "b"
  },
  {
    no: 18,
    text: "Cái… tồn tại trong và thông qua cái riêng mà biểu hiện sự tồn tại của mình?",
    options: {
      a: "Cái chung/cái riêng",
      b: "Cái riêng/cái chung",
      c: "Cái đơn nhất/cái chung",
      d: "Cái đơn nhất/cái riêng"
    },
    correct: "a"
  },
  {
    no: 19,
    text: "Theo quan điểm duy vật biện chứng, nguyên nhân là gì?",
    options: {
      a: "Là phạm trù chỉ sự tác động lẫn nhau giữa các mặt trong một sự vật hoặc giữa các sự vật với nhau, gây ra một biến đổi nào đó",
      b: "Là phạm trù chỉ những biến đổi nhất định do sự tác động lẫn nhau giữa các mặt trong một sự vật hoặc giữa các sự vật với nhau",
      c: "Là phạm trù chỉ tổng thể các mặt, yếu tố tạo nên sự vật, hiện tượng",
      d: "Là phạm trù chỉ phương thức tồn tại, biểu hiện của sự vật, hiện tượng"
    },
    correct: "a"
  },
  {
    no: 20,
    text: "Theo quan điểm duy vật biện chứng, kết quả là gì?",
    options: {
      a: "Là phạm trù chỉ những biến đổi nhất định do sự tác động lẫn nhau giữa các mặt trong một sự vật hoặc giữa các sự vật với nhau",
      b: "Là phạm trù chỉ sự tác động lẫn nhau giữa các mặt trong một sự vật hoặc giữa các sự vật với nhau, gây ra một biến đổi nào đó",
      c: "Là phạm trù chỉ tổng thể các mặt, yếu tố tạo nên sự vật, hiện tượng",
      d: "Là phạm trù chỉ phương thức tồn tại, biểu hiện của sự vật, hiện tượng"
    },
    correct: "a"
  },
  {
    no: 21,
    text: "Ý nghĩa phương pháp luận khi nghiên cứu quy luật phủ định của phủ định?",
    options: {
      a: "Phủ định cái cũ, tạo lập cái mới phải tích cực, phải biết kế thừa những yếu tố tích cực của cái cũ",
      b: "Phủ định là phủ định sạch trơn",
      c: "Cái sau không lặp lại cái trước",
      d: "Cái sau ra đời tiến bộ hơn nhưng không kế thừa cái trước"
    },
    correct: "a"
  },
  {
    no: 22,
    text: "Nội dung của mối liên hệ phổ biến?",
    options: {
      a: "Các sự vật, hiện tượng của thế giới tồn tại trong mối quan hệ qua lại, quy định lẫn nhau, không tách biệt nhau",
      b: "Là sự ràng buộc, tác động lẫn nhau giữa các đối tượng vật chất vô hình",
      c: "Là sự ràng buộc tác động lẫn nhau giữa các đối tượng vật chất hữu hình",
      d: "Cả 3 đáp án đều sai"
    },
    correct: "a"
  },
  {
    no: 23,
    text: "Tính chất của mối liên hệ phổ biến?",
    options: {
      a: "Tính khách quan, tính phổ biến, tính phong phú đa dạng",
      b: "Tính phổ biến, tính khách quan",
      c: "Tính đa dạng phong phú, tính phổ biến",
      d: "Tính phức tạp, tính phổ biến"
    },
    correct: "a"
  },
  {
    no: 24,
    text: "Nguyên tắc toàn diện được hiểu như thế nào?",
    options: {
      a: "Khi nghiên cứu xem xét các đối tượng cụ thể cần một chiều, tránh quan điểm phiến diện một chiều, cần xem xét trong mối liên hệ với các sự vật hiện tượng khác",
      b: "Khi nghiên cứu, xem xét các sự vật hiện tượng không cần liên hệ với sự vật hiện tượng khác",
      c: "Khi xem xét vấn đề chỉ cần xem xét ở thời điểm nó diễn ra sự việc",
      d: "Khi nghiên cứu xem xét các đối tượng cụ thể không cần đặt nó trong chỉnh thể thống nhất của tất cả các mặt"
    },
    correct: "a"
  },
  {
    no: 25,
    text: "Phát triển được hiểu là?",
    options: {
      a: "Sự thay đổi về chất, không có sự thay đổi về lượng, không có sự thay đổi về chất",
      b: "Sự thay đổi về chất",
      c: "Sự tăng lên hay giảm đi về mặt số lượng, không có sự thay đổi về chất",
      d: "Sự tăng lên hay giảm đi về mặt số lượng, có sự thay đổi về chất"
    },
    correct: "b"
  },
  {
    no: 26,
    text: "Tính chất của sự phát triển?",
    options: {
      a: "Tính kế thừa, tính khắc quan",
      b: "Tính kế thừa, tính khắc quan",
      c: "Tính đa dạng, phong phú, tính kế thừa",
      d: "Tính khắc quan, tính phát triển"
    },
    correct: "a"
  },
  {
    no: 27,
    text: "Khi nghiên cứu nguyên tắc phát triển cần?",
    options: {
      a: "Cần đặt đối tượng vào sự vận động phát triển theo xu hướng phát triển của nó, tạo điều kiện cho cái mới ra đời, trên cơ sở kế thừa yếu tố tích cực từ cái cũ",
      b: "Cái mới ra đời phủ nhận sạch trơn cái cũ",
      c: "Sự phát triển diễn ra theo một đường thẳng tắp, không có thụt lùi",
      d: "Phát triển chỉ diễn ra trong những giai đoạn nhất định"
    },
    correct: "a"
  },
  {
    no: 28,
    text: "Đấu tranh giai cấp vô sản chia làm 2 giai đoạn cơ bản bao gồm?",
    options: {
      a: "Giai đoạn trước khi giành chính quyền và sau khi giành chính quyền",
      b: "Giai đoạn đấu tranh và sản xuất",
      c: "Giai đoạn đấu tranh chính trị và đấu tranh kinh tế",
      d: "Giai đoạn đấu tranh tư tưởng"
    },
    correct: "a"
  },
  {
    no: 29,
    text: "Giai đoạn trước khi giành chính quyền, đấu tranh giai cấp vô sản diễn ra dưới những hình thức nào?",
    options: {
      a: "Đấu tranh kinh tế, đấu tranh chính trị",
      b: "Đấu tranh chính trị, đấu tranh kinh tế, đấu tranh tư tưởng",
      c: "Đấu tranh tư tưởng, đấu tranh ngoại giao",
      d: "Đấu tranh tư tưởng, đấu tranh chính trị"
    },
    correct: "b"
  },
  {
    no: 30,
    text: "Giai cấp lãnh đạo cách mạng trong cuộc cách mạng Tháng Tám năm 1945 ở Việt Nam là?",
    options: {
      a: "Giai cấp nông dân",
      b: "Giai cấp công nhân",
      c: "Giai cấp tư sản",
      d: "Giai cấp tiểu tư sản"
    },
    correct: "b"
  },
  {
    no: 31,
    text: "Đối tượng của cách mạng xã hội là?",
    options: {
      a: "Những giai cấp và lực lượng đối lập với cách mạng cần đánh đổ",
      b: "Tất cả các giai cấp và lực lượng trong xã hội",
      c: "Giai cấp tư sản",
      d: "Giai cấp vô sản"
    },
    correct: "a"
  },
  {
    no: 32,
    text: "Bản chất của cách mạng xã hội là?",
    options: {
      a: "Cuộc đấu tranh lật đổ chính quyền, thiết lập chính quyền mới tiến bộ hơn, làm thay đổi toàn bộ xã hội",
      b: "Sự thay đổi dần dần, từng bộ phận, lĩnh vực của đời sống",
      c: "Phương thức tiến hành của một nhóm người nhằm giành chính quyền song không làm thay đổi căn bản xã hội",
      d: "Là những thay đổi bộ phận, lĩnh vực riêng lẻ của đời sống xã hội"
    },
    correct: "d"
  },
  {
    no: 33,
    text: "Giai cấp lãnh đạo cách mạng xã hội phong kiến là?",
    options: {
      a: "Giai cấp địa chủ phong kiến",
      b: "Giai cấp nông dân",
      c: "Giai cấp tiểu tư sản",
      d: "Giai cấp có hệ tư tưởng tiến bộ, đại diện cho phương thức sản xuất tiến bộ"
    },
    correct: "d"
  },
  {
    no: 34,
    text: "Nhà nước là một hiện tượng xã hội, tồn tại trong các xã hội nào?",
    options: {
      a: "Không có giai cấp",
      b: "Có giai cấp và đấu tranh giai cấp",
      c: "Xã hội cộng sản nguyên thủy",
      d: "Xã hội cộng sản chủ nghĩa"
    },
    correct: "b"
  },
  {
    no: 35,
    text: "Nhà nước không tồn tại trong xã hội nào sau đây?",
    options: {
      a: "Xã hội cộng sản nguyên thủy",
      b: "Xã hội chiếm hữu nô lệ",
      c: "Xã hội phong kiến",
      d: "Xã hội tư bản chủ nghĩa"
    },
    correct: "a"
  },
  {
    no: 36,
    text: "Quá trình nhận thức gồm mấy giai đoạn?",
    options: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correct: "a"
  },
  {
    no: 37,
    text: "Nhận thức cảm tính được diễn ra dưới hình thức nào?",
    options: {
      a: "Cảm giác, tri giác, biểu tượng",
      b: "Tri giác, biểu tượng",
      c: "Biểu tượng",
      d: "Cảm giác"
    },
    correct: "a"
  },
  {
    no: 38,
    text: "Nhận thức lý tính được diễn ra dưới hình thức nào?",
    options: {
      a: "Khái niệm, phán đoán, suy lý",
      b: "Phán đoán",
      c: "Suy lý",
      d: "Khái niệm"
    },
    correct: "a"
  },
  {
    no: 39,
    text: "Chân lý có những tính chất nào?",
    options: {
      a: "Tính khách quan, tính tương đối, tính tuyệt đối, tính cụ thể",
      b: "Tính tương đối và tính tuyệt đối, tính đối với tính thể",
      c: "Tính cụ thể và tính khách quan",
      d: "Tính cụ thể và tính tương đối"
    },
    correct: "a"
  },
  {
    no: 40,
    text: "Hình thức đầu tiên và cơ bản trong hoạt động thực tiễn là?",
    options: {
      a: "Thực tiễn sản xuất vật chất",
      b: "Thực tiễn chính trị xã hội",
      c: "Thực tiễn thực nghiệm khoa học",
      d: "Thực tiễn giao tiếp"
    },
    correct: "a"
  },
  {
    no: 41,
    text: "Các yếu tố cơ bản của tồn tại xã hội bao gồm?",
    options: {
      a: "Phương thức sản xuất, điều kiện tự nhiên, hoàn cảnh địa lý, dân số và mật độ dân số",
      b: "Điều kiện tự nhiên, hoàn cảnh địa lý",
      c: "Dân số và mật độ dân số",
      d: "Dân số, mật độ dân số và điều kiện tự nhiên"
    },
    correct: "a"
  },
  {
    no: 42,
    text: "Kết cấu của ý thức xã hội gồm?",
    options: {
      a: "Tâm lý xã hội",
      b: "Hệ tư tưởng xã hội",
      c: "Tâm lý xã hội và hệ tư tưởng xã hội",
      d: "Nhu cầu xã hội"
    },
    correct: "c"
  },
  {
    no: 43,
    text: "Tồn tại xã hội quyết định nội dung, tính chất, đặc điểm xu hướng vận động, biến đổi của ý thức xã hội như thế nào?",
    options: {
      a: "Quyết định nội dung, tính chất, đặc điểm xu hướng vận động, biến đổi của ý thức xã hội",
      b: "Không có mối quan hệ biện chứng với ý thức xã hội",
      c: "Ý thức xã hội quyết định nội dung, tính chất, đặc điểm xu hướng vận động, biến đổi của tồn tại xã hội",
      d: "Ý thức xã hội luôn luôn độc lập và không có sự tác động trở lại đối với tồn tại xã hội"
    },
    correct: "a"
  },
  {
    no: 44,
    text: "Định nghĩa về giai cấp được V.I.Lênin viết trong tác phẩm nào?",
    options: {
      a: "Nhà nước và cách mạng",
      b: "Sáng kiến vĩ đại",
      c: "Những nhiệm vụ trước mắt của chính quyền Xô Viết",
      d: "Cách mạng vô sản và tên phản bội Caussky"
    },
    correct: "b"
  },
  {
    no: 45,
    text: "Kết cấu xã hội của giai cấp gồm?",
    options: {
      a: "Hai giai cấp cơ bản và những giai cấp không cơ bản hoặc tầng lớp trung gian",
      b: "Hai giai cấp cơ bản",
      c: "Ba giai cấp cơ bản",
      d: "Bốn giai cấp cơ bản"
    },
    correct: "a"
  },
  {
    no: 46,
    text: "Sau khi giành chính quyền, mục tiêu của giai cấp vô sản là?",
    options: {
      a: "Xây dựng thành công chủ nghĩa xã hội",
      b: "Phát động chiến tranh ngoại bang",
      c: "Tiếp tục cuộc đấu tranh với giai cấp khác",
      d: "Phát triển đối ngoại"
    },
    correct: "a"
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