'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    email: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 实际项目中会调用 API
    console.log('Submitted:', formData);
    
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-lg mx-auto text-center">
          <span className="text-6xl mb-6 block">✅</span>
          <h1 className="text-3xl font-bold mb-4">提交成功！</h1>
          <p className="text-gray-400 mb-8">
            感谢你的贡献！我们会尽快审核并上架。
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">
            继续提交
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-purple-500/20 text-purple-300">社区贡献</Badge>
          <h1 className="text-3xl font-bold mb-4">提交空投项目</h1>
          <p className="text-gray-400">
            发现了好空投？分享给社区，帮助更多人获得机会
          </p>
        </div>

        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle>空投信息</CardTitle>
            <CardDescription>
              请填写空投项目的基本信息，我们会尽快审核
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  项目名称 <span className="text-red-400">*</span>
                </label>
                <Input
                  required
                  placeholder="例如: LayerZero"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-gray-800/50 border-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  项目网址 <span className="text-red-400">*</span>
                </label>
                <Input
                  required
                  type="url"
                  placeholder="https://..."
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="bg-gray-800/50 border-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  简要描述
                </label>
                <textarea
                  placeholder="简单描述这个空投..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full h-24 px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  你的邮箱 <span className="text-red-400">*</span>
                </label>
                <Input
                  required
                  type="email"
                  placeholder="用于通知审核结果"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-gray-800/50 border-gray-700"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-500 h-12"
                disabled={loading}
              >
                {loading ? '提交中...' : '📤 提交空投'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 p-4 bg-gray-900/30 rounded-xl border border-gray-800">
          <h3 className="font-semibold mb-3">📋 提交须知</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• 请确保项目真实可信，不提交钓鱼或诈骗项目</li>
            <li>• 我们会在 1-3 个工作日内完成审核</li>
            <li>• 审核通过后会通过邮件通知你</li>
            <li>• 优质贡献者将获得特别标识</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
