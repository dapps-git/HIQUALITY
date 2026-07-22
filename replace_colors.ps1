$files = Get-ChildItem 'c:\projects\HIQUALITY\src' -Recurse -Include '*.jsx','*.js'
foreach ($f in $files) {
  $c = Get-Content $f.FullName -Raw -Encoding UTF8
  $u = $c `
    -replace '#7EBA27', '#DC2626' `
    -replace '#84CC16', '#B91C1C' `
    -replace 'rgba\(126,186,39,', 'rgba(220,38,38,' `
    -replace '#F4FCE8', '#FEF2F2' `
    -replace '#D1E7AF', '#FECACA'
  if ($u -ne $c) {
    Set-Content -Path $f.FullName -Value $u -NoNewline -Encoding UTF8
    Write-Host "Updated: $($f.Name)"
  }
}
Write-Host "All done."
