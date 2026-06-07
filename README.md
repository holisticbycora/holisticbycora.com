<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Holistic by Cora</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Inter:wght@300;400&display=swap" rel="stylesheet">

<style>
body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #f6f1eb;
    color: #2b2b2b;
}

.hero {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)),
    url('https://images.unsplash.com/photo-1506126613408-eca07ce68773') center/cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
}

.hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: 64px;
    margin: 0;
}

.hero p {
    font-size: 18px;
    margin-top: 10px;
    opacity: 0.9;
}

.button {
    margin-top: 20px;
    padding: 12px 28px;
    background: #c2a68c;
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-size: 14px;
}

section {
    padding: 80px 20px;
    max-width: 900px;
    margin: auto;
}

h2 {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
}

.card {
    background: white;
    padding: 24px;
    margin-top: 20px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

footer {
    text-align: center;
    padding: 40px;
    font-size: 12px;
    color: #777;
}
</style>
</head>

<body>

<div class="hero">
    <h1>Holistic by Cora</h1>
    <p>Healing Through Sound · Scent · Presence</p>
    <a class="button" href="#contact">Book a Session</a>
</div>

<section>
    <h2>About Cora</h2>
    <div class="card">
        I create a sanctuary for healing and inner alignment through sound therapy,
        aromatherapy, meditation, and intuitive guidance.
    </div>
</section>

<section>
    <h2>Services</h2>

    <div class="card">Singing Bowl Healing</div>
    <div class="card">Aromatherapy Sessions</div>
    <div class="card">Rune Reading</div>
    <div class="card">Guided Meditation</div>
    <div class="card">Soul Blueprint Session</div>
</section>

<section id="contact">
    <h2>Contact</h2>
    <div class="card">
        info@holisticbycora.com
    </div>
</section>

<footer>
    © Holistic by Cora · Mind · Body · Spirit
</footer>

</body>
</html>
