# 获取当前日期时间
$current_date = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
# 使用第一个参数作为提交信息，如果没有则默认为"update"
$commit_message = if ($args.Count -gt 0) { $args[0] } else { "update" }

# 添加所有更改并提交
Write-Host "正在提交本地更改..."
git add .
git commit -m "$commit_message $current_date"

# 推送到远程
Write-Host "正在推送到远程仓库..."
git push

Write-Host "操作完成！"