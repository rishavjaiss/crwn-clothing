const initialState = {
  sections: [
    {
      title: "hats",
      imageUrl: "images/hats.png", // local file in public/images/
      webImageUrl:
        "https://cdn.shopify.com/s/files/1/1023/3455/files/Screen_Shot_2017-07-18_at_3.54.22_pm_1024x1024.png",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "images/jackets.png", // local file in public/images/
      webImageUrl:
        "http://2.bp.blogspot.com/-hahX1_rdfPk/Vf-lxcfz0II/AAAAAAAABHU/RsA9OHEFSj0/s640/IMG_0028.JPG",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "images/sneakers.png", // local file in public/images/
      webImageUrl:
        "https://static.highsnobiety.com/thumbor/Oqz590nQB_ht_tfnyqG64mougWQ=/1600x1067/static.highsnobiety.com/wp-content/uploads/2017/06/13174101/sneaker-collection-for-sale-main.jpg",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: "images/womens.png", // local file in public/images/
      webImageUrl:
        "https://img.freepik.com/free-photo/three-young-beautiful-smiling-girls-trendy-summer-casual-jeans-clothes-sexy-carefree-women-posing-positive-models-sunglasses_158538-4730.jpg?size=626&ext=jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: "images/men.png", // local file in public/images/
      webImageUrl:
        "https://cdn.luxe.digital/media/2019/12/16162219/best-men-online-shopping-mr-porter-menswear-style-luxe-digital.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
