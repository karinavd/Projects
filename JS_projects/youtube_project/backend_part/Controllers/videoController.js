import { createRequire } from 'module';

const require = createRequire(import.meta.url);
// const Video = require('../Models/videoModel.js');
const uploadVideo = async (req, res) => {
    try {
        const { title, description, videoLink, thumbnail,videoType,like,dislike, userId } = req.body;
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong", success: false });
    }
}
export default uploadVideo; 