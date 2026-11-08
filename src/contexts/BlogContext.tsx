import React, { createContext, useContext, useState, useEffect } from 'react';
import { BlogPost, ModerationStat } from '../types/blogModeration.types';
import { BlogPostDetail } from '../types/blogReview.types';
import { mockBlogPosts, mockModerationStats } from '../components/blog/moderation/mockData';
import { mockBlogPostDetail } from '../components/blog/review/mockData';

interface BlogContextType {
    posts: BlogPost[];
    stats: ModerationStat[];
    postDetail: BlogPostDetail | null;
    updatePostStatus: (id: string, status: BlogPost['status']) => void;
    setPostDetail: (post: BlogPostDetail) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<BlogPost[]>(() => {
        const stored = localStorage.getItem('blog_posts');
        return stored ? JSON.parse(stored) : mockBlogPosts;
    });

    const [stats] = useState<ModerationStat[]>(() => {
        const stored = localStorage.getItem('blog_stats');
        return stored ? JSON.parse(stored) : mockModerationStats;
    });

    const [postDetail, setPostDetail] = useState<BlogPostDetail | null>(() => {
         const stored = localStorage.getItem('blog_post_detail');
         return stored ? JSON.parse(stored) : mockBlogPostDetail;
    });

    useEffect(() => {
        localStorage.setItem('blog_posts', JSON.stringify(posts));
    }, [posts]);

    useEffect(() => {
        localStorage.setItem('blog_stats', JSON.stringify(stats));
    }, [stats]);

    useEffect(() => {
        localStorage.setItem('blog_post_detail', JSON.stringify(postDetail));
    }, [postDetail]);

    const updatePostStatus = (id: string, status: BlogPost['status']) => {
        setPosts(prev => prev.map(p => p.id === id ? { ...p, status } : p));
        if (postDetail && postDetail.id === id) {
            setPostDetail({ ...postDetail, status });
        }
    };

    return (
        <BlogContext.Provider value={{ posts, stats, postDetail, updatePostStatus, setPostDetail }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlogContext = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error('useBlogContext must be used within a BlogProvider');
    }
    return context;
};
