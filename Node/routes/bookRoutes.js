import expres from "express";
const router = expres();
import Book from "../model/bookModel.js";

//get all books
router.get("/book", async (req, res) => {
  try {
    const books = await Book.find(); //return obj inside array
    res
      .status(200)
      .json({ message: "Books fetched successfully!", data: books });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error!" });
  }
});

//create book
router.post("/book", async (req, res) => {
  try {
    //console.log(req.body);
    const {bookName,bookPrice,isbnNumber,authorName,publishedAt,publication,description} = req.body;
    await Book.create({bookName,bookPrice,isbnNumber,authorName,publishedAt,publication, description});
    res.status(200).json({ message: "Book is created successfully!" });
    //for more clear:  left=column and right ko chai user le halako data ...but we can write single because key and value name is same
    // await Book.create({
    //     bookName: bookName,
    //     bookPrice:bookPrice,
    //     isbnNumber:isbnNumber,
    //     authorName : authorName,
    //     publishedAt : publishedAt,
    //     publication:publication,
    //description:description });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error!" });
  }
});

//get single books
router.get("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id); //return object
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    } else {
      res
        .status(200)
        .json({ message: "Single book is successfully fetched!", data: book });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error!" });
  }
});

//delete
router.delete("/book/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const book= await Book.findByIdAndDelete(id);
        if(!book){
            res.status(404).json({error : "Book not found!"})
        }
        res.status(200).json({message:"Book is deleted successfully!"});
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Internal server error!" });
    }
})

//updates
router.patch("/book/:id", async(req, res)=>{
   try{
    const id=req.params.id;  //kun book update garna ho tesko id
    const {bookName,bookPrice,isbnNumber,authorName,publishedAt,publication,description} = req.body;  //updated data auxa auxa key:value/object ko form
    const book=await Book.findByIdAndUpdate(id, {bookName,bookPrice,isbnNumber,authorName,publishedAt,publication,description});
    if(!book){
        res.status(404).json({error:"Book not found!"});
    }
    res.status(200).json({message: "Book is successfully updated"});
   }catch(err){
    console.log(err);
    res.status(500).json({error:"Internal server error!"})
   }
})

export default router;