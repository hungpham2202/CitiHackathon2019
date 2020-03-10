from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import smtplib, ssl

def send_email(email,header,html):
    sender_email = "caibengno1@gmail.com"  # Enter your address
    receiver_email = email  # Enter receiver address
    password = "woo@hoo12"

    message = MIMEMultipart("alternative")
    message["Subject"] = header
    message["From"] = sender_email
    message["To"] = receiver_email
    port = 465  # For SSL
    smtp_server = "smtp.gmail.com"
    text = "This is plain text"

    part1 = MIMEText(text, "plain")
    part2 = MIMEText(html, "html")

    # Add HTML/plain-text parts to MIMEMultipart message
    # The email client will try to render the last part first
    message.attach(part1)
    message.attach(part2)

    # Create secure connection with server and send email
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(
            sender_email, receiver_email, message.as_string()
        )
