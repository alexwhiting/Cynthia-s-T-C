export const FAQ = [{
  question: 'What subjects and grade levels do you tutor?',
  answer: 'I provide tutoring in math and literacy for students from Kindergarten through Grade 12, as well as support for adult learners. I also offer early literacy intervention, post-secondary academic support, and enrichment for advanced students.',
  questionNumber: 'One'
}, {
  question: 'Do you offer in-person or online tutoring?',
  answer: 'Both! Online sessions are available to all learners, regardless of location. In-person tutoring may be available depending on your location—please contact me to discuss availability.',
  questionNumber: 'Two'
}, {
  question: 'How long are tutoring sessions, and how often should they happen?',
  answer: 'Sessions are typically 45–60 minutes, depending on the age and needs of the student. Most students benefit from 1–2 sessions per week. I’ll work with you to find a schedule that fits your goals.',
  questionNumber: 'Three'
}, {
  question: 'How do I know what kind of help my child needs?',
  answer: 'I offer optional math and literacy assessments to identify strengths, challenges, and guide instruction. I also review psycho-educational assessments, report cards, and teacher feedback to create personalized learning plans.',
  questionNumber: 'Four'
}, {
  question: 'How do I get started?',
  answer: 'You can contact me through the [Contact Me] page to book a free consultation. We’ll discuss your child’s needs, goals, and the best path forward. From there, we can arrange sessions and any assessments you’d like.',
  questionNumber: 'Five'
}];

export function generateFrequentlyAskedQuestionsHTML () {
  let html = '';

  FAQ.forEach((FaqItem) => {
    html +=
    `
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading${FaqItem.questionNumber}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${FaqItem.questionNumber}" aria-expanded="false" aria-controls="collapse${FaqItem.questionNumber}">
            ${FaqItem.question}
          </button>
        </h2>
        <div id="collapse${FaqItem.questionNumber}" class="accordion-collapse collapse" aria-labelledby="heading${FaqItem.questionNumber}" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            ${FaqItem.answer}
          </div>
        </div>
      </div>
    `
  });

  document.querySelector('.accordion')
    .innerHTML = html;
}