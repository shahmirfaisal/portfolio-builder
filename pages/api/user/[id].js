import mongooseConnect from "../../../lib/mongooseConnect";
import User from "../../../models/user";
import { mongooseErrorHandler } from "../../../utils";

export default async (req, res) => {
  if (req.method === "PUT") {
    await mongooseConnect();

    try {
      const { name, username, email, image, password } = req.body;

      if (username?.trim()) {
        const userExist = await User.findOne({ username });

        if (userExist && userExist._id.toString() !== req.query.id) {
          throw new Error("Username has already taken!");
        }
      }

      let user = await User.findById(req.query.id);
      user.name = typeof name === "string" ? name : user.name;
      user.username = typeof username === "string" ? username : user.username;
      user.email = typeof email === "string" ? email : user.email;
      user.password = typeof password === "string" ? password : user.password;
      user.image = typeof image === "string" ? image : user.image;

      await user.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(mongooseErrorHandler(error));
    }
  } else {
    res.status(405).json("Invalid Method");
  }
};
