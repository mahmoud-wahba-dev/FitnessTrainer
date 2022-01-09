"""
    Module to send email
"""

import threading
from project.settings import EMAIL_HOST_USER
from django.core.mail import EmailMessage


class EmailThread(threading.Thread):
    def __init__(self, subject, html_content, recipient_list, attachments=None):
        self.subject = subject
        self.recipient_list = recipient_list
        self.html_content = html_content
        self.attachments = attachments
        threading.Thread.__init__(self)

    def run(self):
        email = EmailMessage(self.subject, self.html_content, EMAIL_HOST_USER, self.recipient_list)
        if self.attachments:
            for uploaded_file in self.attachments:
                email.attach(uploaded_file.name, uploaded_file.read(), uploaded_file.content_type)
        email.send()


def send_html_mail(subject, html_content, recipient_list, attachment=None):
    EmailThread(subject, html_content, recipient_list, attachments=attachment).start()
