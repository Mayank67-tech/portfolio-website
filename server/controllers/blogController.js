const Blog = require('../models/Blog');

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

exports.getBlogs = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    const [blogs, total] = await Promise.all([
      Blog.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Blog.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      data: blogs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found.' });
    }

    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

exports.getBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found.' });
    }

    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

exports.createBlog = async (req, res, next) => {
  try {
    const { title, content, excerpt, tags } = req.body;
    const slug = slugify(title);
    const existing = await Blog.findOne({ slug });
    if (existing) {
      return res.status(400).json({ message: 'A blog with this title already exists.' });
    }
    const blog = await Blog.create({
      title,
      slug,
      content,
      excerpt: excerpt || content?.slice(0, 300),
      tags: Array.isArray(tags) ? tags : tags ? [tags] : [],
    });
    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

exports.updateBlog = async (req, res, next) => {
  try {
    const { title, content, excerpt, tags } = req.body;
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found.' });
    }

    if (title && title !== blog.title) {
      blog.slug = slugify(title);
      blog.title = title;
    }
    if (content !== undefined) blog.content = content;
    if (excerpt !== undefined) blog.excerpt = excerpt;
    if (tags !== undefined) blog.tags = Array.isArray(tags) ? tags : [tags];

    await blog.save();
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

exports.deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found.' });
    }

    res.status(200).json({ success: true, message: 'Blog deleted.' });
  } catch (error) {
    next(error);
  }
};
