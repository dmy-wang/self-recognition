#!/bin/bash

echo "=========================================="
echo "  心理测试网站一键部署脚本"
echo "=========================================="

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

# 检查是否为root用户
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}请使用root用户运行此脚本${NC}"
    exit 1
fi

# 获取服务器IP
SERVER_IP=$(curl -s ifconfig.me)
echo -e "${GREEN}服务器IP: $SERVER_IP${NC}"

# 1. 更新系统
echo -e "${GREEN}[1/5] 更新系统软件包...${NC}"
apt update && apt upgrade -y

# 2. 安装Nginx
echo -e "${GREEN}[2/5] 安装Nginx...${NC}"
apt install nginx -y

# 3. 创建网站目录
echo -e "${GREEN}[3/5] 创建网站目录...${NC}"
mkdir -p /var/www/self-recognition

# 4. 配置Nginx
echo -e "${GREEN}[4/5] 配置Nginx...${NC}"
cat > /etc/nginx/sites-available/self-recognition << 'EOF'
server {
    listen 80;
    listen [::]:80;
    
    server_name _;
    
    root /var/www/self-recognition;
    index index.html;
    
    # 启用gzip压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/html text/css application/javascript application/json image/svg+xml;
    
    # 静态资源缓存
    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    
    location / {
        try_files $uri $uri/ =404;
    }
}
EOF

# 禁用默认配置，启用新配置
rm -f /etc/nginx/sites-enabled/default
ln -sf /etc/nginx/sites-available/self-recognition /etc/nginx/sites-enabled/

# 测试并重载Nginx
nginx -t && systemctl reload nginx
systemctl enable nginx

# 5. 配置防火墙
echo -e "${GREEN}[5/5] 配置防火墙...${NC}"
if command -v ufw &> /dev/null; then
    ufw --force enable
    ufw allow 'Nginx Full'
    ufw allow ssh
fi

echo ""
echo "=========================================="
echo -e "${GREEN}部署完成！${NC}"
echo "=========================================="
echo ""
echo "请将网站文件上传到: /var/www/self-recognition"
echo ""
echo "上传方法（在本地电脑执行）："
echo "  scp -r D:\\git_rep\\self-recognition\\* root@$SERVER_IP:/var/www/self-recognition/"
echo ""
echo "或者使用Git："
echo "  cd /var/www/self-recognition"
echo "  git clone https://github.com/Aiwenqiuyu/self-recognition.git ."
echo ""
echo "访问地址: http://$SERVER_IP"
echo "=========================================="
