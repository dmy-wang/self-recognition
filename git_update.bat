@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

:main
cls
echo ========================================
echo       Git 一键更新脚本 v2.0
echo ========================================
echo.
echo 当前仓库: %cd%
echo.
echo ========================================
echo       请选择操作
echo ========================================
echo.
echo [1] 查看状态
echo [2] 提交并推送
echo [3] 仅提交
echo [4] 仅推送
echo [5] 查看提交历史
echo [6] 拉取最新代码
echo [7] 查看远程仓库
echo [8] 清理代理设置
echo [0] 退出
echo.
set /p choice="请输入选项 (0-8): "

if "%choice%"=="1" goto status
if "%choice%"=="2" goto commit_push
if "%choice%"=="3" goto commit_only
if "%choice%"=="4" goto push_only
if "%choice%"=="5" goto log
if "%choice%"=="6" goto pull
if "%choice%"=="7" goto remote
if "%choice%"=="8" goto clear_proxy
if "%choice%"=="0" goto end

echo 无效选项，请重新选择
timeout /t 2 >nul
goto main

:status
cls
echo ========================================
echo       Git 状态
echo ========================================
echo.
git status
echo.
pause
goto main

:commit_push
cls
echo ========================================
echo       提交并推送
echo ========================================
echo.
echo [1/3] 添加所有更改...
git add .
if %errorlevel% neq 0 (
    echo 错误: 添加文件失败
    pause
    goto main
)
echo 完成
echo.

echo [2/3] 提交更改...
set /p msg="请输入提交信息（留空使用默认）: "
if "%msg%"=="" set msg=更新代码
git commit -m "%msg%"
if %errorlevel% neq 0 (
    echo 错误: 提交失败
    pause
    goto main
)
echo 完成
echo.

echo [3/3] 推送到远程仓库...
git push
if %errorlevel% neq 0 (
    echo 错误: 推送失败
    echo.
    echo 可能的原因:
    echo 1. 网络连接问题
    echo 2. 代理设置错误
    echo 3. GitHub 服务器问题
    echo 4. 权限不足
    echo.
    echo 建议操作:
    echo - 检查网络连接
    echo - 尝试清理代理设置 (选项8)
    echo - 稍后重试
    pause
    goto main
)
echo 完成
echo.
echo ========================================
echo       更新成功！
echo ========================================
pause
goto main

:commit_only
cls
echo ========================================
echo       仅提交
echo ========================================
echo.
echo [1/2] 添加所有更改...
git add .
echo 完成
echo.

echo [2/2] 提交更改...
set /p msg="请输入提交信息（留空使用默认）: "
if "%msg%"=="" set msg=更新代码
git commit -m "%msg%"
echo 完成
echo.
pause
goto main

:push_only
cls
echo ========================================
echo       仅推送
echo ========================================
echo.
git push
if %errorlevel% neq 0 (
    echo 错误: 推送失败
    pause
    goto main
)
echo 完成
echo.
pause
goto main

:log
cls
echo ========================================
echo       提交历史
echo ========================================
echo.
git log --oneline -10
echo.
pause
goto main

:pull
cls
echo ========================================
echo       拉取最新代码
echo ========================================
echo.
git pull
if %errorlevel% neq 0 (
    echo 错误: 拉取失败
    pause
    goto main
)
echo 完成
echo.
pause
goto main

:remote
cls
echo ========================================
echo       远程仓库信息
echo ========================================
echo.
git remote -v
echo.
pause
goto main

:clear_proxy
cls
echo ========================================
echo       清理代理设置
echo ========================================
echo.
echo 正在清理代理设置...
git config --global --unset-all http.proxy
git config --global --unset-all https.proxy
echo 完成
echo.
echo 当前代理设置:
git config --global --list | findstr proxy
echo.
pause
goto main

:end
cls
echo ========================================
echo       退出脚本
echo ========================================
echo.
echo 感谢使用！
echo.
timeout /t 2 >nul
exit /b 0