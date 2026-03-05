<?php
include 'config.php';
$result=$conn->query("SELECT * FROM messages ORDER BY id DESC");
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Admin Panel | Messages</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<header><div class="logo">Admin Panel</div></header>
<section class="section">
<h2>Received Messages</h2>
<table border="1" cellpadding="10" cellspacing="0">
<tr><th>ID</th><th>Name</th><th>Email</th><th>Message</th><th>Time</th></tr>
<?php while($row=$result->fetch_assoc()){ ?>
<tr>
<td><?php echo $row['id']; ?></td>
<td><?php echo $row['name']; ?></td>
<td><?php echo $row['email']; ?></td>
<td><?php echo $row['message']; ?></td>
<td><?php echo $row['created_at']; ?></td>
</tr>
<?php } ?>
</table>
</section>
</body>
</html>