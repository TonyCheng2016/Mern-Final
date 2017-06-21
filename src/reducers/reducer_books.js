export default function () {
  return [
    {
      title: 'Javascript: The Good Parts', pages: 101, 
      url: "http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf",
      contents: "This quo function is designed to be used without the new prefix, so the name is not capitalized. When we call quo, it returns a new object containing a get_status method. A reference to that object is stored in myQuo. The get_status method still has privileged access to quo’s status property even though quo has already returned. get_status does not have access to a copy of the parameter; it has access to the parameter itself. This is possible because the function has access to the context in which it was created. This is called closure.",
      img: "http://lh4.ggpht.com/_0j4bzarlOBg/TDQpgO3Xg4I/AAAAAAAABL8/90En1S_KAOk/image3%5B1%5D.png"
    },
    {
      title: 'Harry Potter', pages: 39, 
      url: "http://www2.sdfi.edu.cn/netclass/jiaoan/englit/download/Harry%20Potter%20and%20the%20Sorcerer's%20Stone.pdf",
      contents: "He clapped his hands. In an instant, the green hangings became scarlet and the silver became gold; the huge Slytherin serpent vanished and a towering Gryffindor lion took its place. Snape was shaking Professor McGonagall's hand, with a horrible, forced smile. He caught Harry's eye and Harry knew at once that Snape's feelings toward him hadn't changed one jot. This didn't worry Harry. It seemed as though life would be back to normal next year, or as normal as it ever was at Hogwarts.",
      img: "https://s-media-cache-ak0.pinimg.com/736x/3e/26/49/3e26494bbde4df3743245a388ad9ad9c.jpg"
    },
    {
      title: 'The Dark Tower', pages: 85, 
      url: "http://cnqzu.com/library/Anarchy%20Folder/Fiction/King,_Stephen/King,_Stephen_-_Dark_Tower_01_-_The_Gunslinger.pdf",
      contents: "Then gravity reasserted itself and they fell, with meaningless objects raining down all around them. The floormat which had been floating around in the Ford's cabin landed draped over the steering wheel. Eddie's midsection hit the top of the front seat and air exploded out of him in a rough whoosh. Roland landed beside him, and on his bad hip. He gave a single barking cry and then began to pull himself back into the front seat.",
      img: "http://www.en8848.com.cn/d/file/soft/Fiction/Fantasy/201001/e518ae8b32be9625d6f4a8f7d37e57c2.jpg"
    },
    {
      title: 'Eloquent Ruby', pages: 1, 
      url: "http://www.r-5.org/files/books/computers/languages/ruby/main/Russ_Olsen-Eloquent_Ruby-EN.pdf",
      contents: '',
      img: "http://www.informit.com/ShowCover.aspx?isbn=0321584104"
    },
    {
      title: 'Operating System', pages: 259,
      url: "http://www.uobabylon.edu.iq/download/M.S%202013-2014/Operating_System_Concepts,_8th_Edition[A4].pdf",
      contents: "The standard C library provides a portion o£ the system-call interface for many versions of UNIX and Linux. As an example, let's assume a C program invokes the printf () statement The C library intercepts this call and invokes the necessary system call(s) in the operating system-in this instance, the write() system call. The C library takes the value returned by write() and passes it back to the user program. This is shown in Figure 2.9.",
      img: "https://images-na.ssl-images-amazon.com/images/I/51spVw9pGKL._SX348_BO1,204,203,200_.jpg"
    },
    {
      title: 'Discrete Mathematics', pages: 395, 
      url: "https://www.cims.nyu.edu/~regev/teaching/discrete_math_fall_2005/dmbook.pdf",
      contents: "Probability theory is one of the most important areas of mathematics from the point of view of applications. In this book, we do not attempt to introduce even the most basic notions of probability theory; our only goal is to illustrate the importance of combinatorial results about the Pascal Triangle by explaning a key result in probability theory, the Law of Large Numbers. To do so, we have to talk a little about what probability is.",
      img: "https://images.tandf.co.uk/common/jackets/amazon/978143981/9781439812808.jpg"
    },
    {
      title: 'Data Structure', pages: 425,
      url: "http://www.sncwgs.ac.in/wp-content/uploads/2015/11/Fundamental-Data-Structures.pdf",
      contents: 'Operations on a dynamic set can be grouped into two categories: queries, which simply return information about the set, and modifying operations, which change the set . Here is a list of typical operations . Any specific application will usually require only a few of these to be implemented.',
      img: "https://images-na.ssl-images-amazon.com/images/I/514ZPA8Z6ZL.jpg"
    },
    {
      title: 'Programming In C++', pages: 212,
      url: "",
      contents: '',
      img: "https://media.taaze.tw/showLargeImage.html?sc=11100569129"
    },
    {
      title: 'React & Redux', pages: 425, 
      url: "",
      contents: '',
      img: "https://images-na.ssl-images-amazon.com/images/I/51pvhEf9zUL._SX386_BO1,204,203,200_.jpg"
    },
    {
      title: 'Arduino + IOT', pages: 212, 
      url: "",
      contents: '',
      img: "https://s-media-cache-ak0.pinimg.com/736x/92/fe/f3/92fef3539c33696839b0e98acb56d36c.jpg"
    }
  ];
}
