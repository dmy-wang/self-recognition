@echo off
chcp 65001 >nul
echo ==========================================
echo   心理测试网站文件上传脚本
echo ==========================================
echo.

set /p SERVER_IP=请输入服务器IP地址: 
set /p SERVER_USER=请输入服务器用户名(默认root): 
if "%SERVER_USER%"=="" set SERVER_USER=root

echo.
echo 正在上传文件到服务器...
echo.

scp -r "%~dp0*" %SERVER_USER%@%SERVER_IP%:/var/www/self-recognition/

if %errorlevel% equ 0 (
    echo.
    echo ==========================================
    echo   上传成功！
    echo ==========================================
    echo.
    echo 请访问: http://%SERVER_IP%
    echo.
) else (
    echo.
    echo 上传失败，请检查：
    echo 1. 服务器IP是否正确
    echo 2. SSH服务是否运行
    echo 3. 是否已配置SSH密钥或密码
)

pause
