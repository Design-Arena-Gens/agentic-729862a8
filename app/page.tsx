'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    zipCode: ''
  })
  const [surveyData, setSurveyData] = useState({
    question1: '',
    question2: '',
    question3: ''
  })
  const [offersCompleted, setOffersCompleted] = useState<number[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSurveyChange = (question: string, value: string) => {
    setSurveyData({
      ...surveyData,
      [question]: value
    })
  }

  const handleOfferToggle = (offerId: number) => {
    if (offersCompleted.includes(offerId)) {
      setOffersCompleted(offersCompleted.filter(id => id !== offerId))
    } else {
      setOffersCompleted([...offersCompleted, offerId])
    }
  }

  const handleSubmitInfo = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.age && formData.zipCode) {
      setStep(2)
    }
  }

  const handleSubmitSurvey = (e: React.FormEvent) => {
    e.preventDefault()
    if (surveyData.question1 && surveyData.question2 && surveyData.question3) {
      setStep(3)
    }
  }

  const handleSubmitOffers = (e: React.FormEvent) => {
    e.preventDefault()
    if (offersCompleted.length >= 3) {
      setStep(4)
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Crumbl</div>
      </header>

      {step === 1 && (
        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.badge}>LIMITED TIME OFFER</div>
            <h1 className={styles.headline}>
              Get Your <span className={styles.highlight}>$100 Crumbl</span> Gift Card FREE!
            </h1>
            <p className={styles.subheadline}>
              Complete a quick survey + 3 simple offers and enjoy unlimited cookies on us! 🍪
            </p>

            <div className={styles.proofSection}>
              <div className={styles.proofItem}>
                <span className={styles.proofNumber}>12,487+</span>
                <span className={styles.proofText}>Gift Cards Claimed</span>
              </div>
              <div className={styles.proofItem}>
                <span className={styles.proofNumber}>⭐⭐⭐⭐⭐</span>
                <span className={styles.proofText}>4.8/5 Rating</span>
              </div>
            </div>

            <div className={styles.giftCardPreview}>
              <div className={styles.giftCard}>
                <div className={styles.cardContent}>
                  <div className={styles.cardLogo}>Crumbl</div>
                  <div className={styles.cardAmount}>$100</div>
                  <div className={styles.cardText}>GIFT CARD</div>
                </div>
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmitInfo}>
              <h2 className={styles.formTitle}>Step 1: Enter Your Info</h2>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleInputChange}
                className={styles.input}
                required
                min="18"
              />
              <input
                type="text"
                name="zipCode"
                placeholder="ZIP Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                className={styles.input}
                required
                pattern="[0-9]{5}"
                maxLength={5}
              />
              <button type="submit" className={styles.ctaButton}>
                Continue to Survey →
              </button>
            </form>

            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                <span>100% Free - No Purchase Required</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                <span>Takes Only 5-7 Minutes</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                <span>Instant Digital Delivery</span>
              </div>
            </div>
          </section>

          <section className={styles.howItWorks}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <div className={styles.steps}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3>Enter Your Info</h3>
                <p>Quick sign-up with basic details</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3>Complete Survey</h3>
                <p>Answer 3 simple questions</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3>Complete Offers</h3>
                <p>Try 3 partner offers (free trials)</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3>Get Your Card!</h3>
                <p>Receive $100 gift card via email</p>
              </div>
            </div>
          </section>

          <section className={styles.faq}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <h3>Is this really free?</h3>
                <p>Yes! No purchase necessary. Just complete the survey and offers.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How long does it take?</h3>
                <p>Most users complete everything in 5-7 minutes.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>When will I receive my gift card?</h3>
                <p>Digital gift cards are delivered to your email within 24-48 hours after completing all requirements.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What are the offers?</h3>
                <p>They're free trials from our trusted partners - streaming services, apps, and more. You can cancel anytime.</p>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <p className={styles.disclaimer}>
              *Offer valid while supplies last. Must be 18+ and US resident. By participating, you agree to receive promotional emails. You may unsubscribe at any time. Gift card delivery within 24-48 hours of completing all requirements. This promotion is not affiliated with or endorsed by Crumbl Cookies.
            </p>
            <div className={styles.footerLinks}>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#contact">Contact</a>
            </div>
          </footer>
        </main>
      )}

      {step === 2 && (
        <main className={styles.main}>
          <section className={styles.surveySection}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: '33%' }}></div>
            </div>
            <h2 className={styles.formTitle}>Step 2: Quick Survey</h2>
            <p className={styles.stepDescription}>Just 3 questions to go!</p>

            <form className={styles.form} onSubmit={handleSubmitSurvey}>
              <div className={styles.questionGroup}>
                <label className={styles.questionLabel}>
                  1. How often do you visit Crumbl Cookies?
                </label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="question1"
                      value="weekly"
                      checked={surveyData.question1 === 'weekly'}
                      onChange={(e) => handleSurveyChange('question1', e.target.value)}
                      required
                    />
                    Weekly
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="question1"
                      value="monthly"
                      checked={surveyData.question1 === 'monthly'}
                      onChange={(e) => handleSurveyChange('question1', e.target.value)}
                    />
                    Monthly
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="question1"
                      value="occasionally"
                      checked={surveyData.question1 === 'occasionally'}
                      onChange={(e) => handleSurveyChange('question1', e.target.value)}
                    />
                    Occasionally
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="question1"
                      value="first-time"
                      checked={surveyData.question1 === 'first-time'}
                      onChange={(e) => handleSurveyChange('question1', e.target.value)}
                    />
                    First Time
                  </label>
                </div>
              </div>

              <div className={styles.questionGroup}>
                <label className={styles.questionLabel}>
                  2. What's your favorite cookie flavor?
                </label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="question2"
                      value="chocolate-chip"
                      checked={surveyData.question2 === 'chocolate-chip'}
                      onChange={(e) => handleSurveyChange('question2', e.target.value)}
                      required
                    />
                    Chocolate Chip
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="question2"
                      value="pink-sugar"
                      checked={surveyData.question2 === 'pink-sugar'}
                      onChange={(e) => handleSurveyChange('question2', e.target.value)}
                    />
                    Pink Sugar
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="question2"
                      value="sea-salt-toffee"
                      checked={surveyData.question2 === 'sea-salt-toffee'}
                      onChange={(e) => handleSurveyChange('question2', e.target.value)}
                    />
                    Sea Salt Toffee
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="question2"
                      value="other"
                      checked={surveyData.question2 === 'other'}
                      onChange={(e) => handleSurveyChange('question2', e.target.value)}
                    />
                    Other
                  </label>
                </div>
              </div>

              <div className={styles.questionGroup}>
                <label className={styles.questionLabel}>
                  3. Where did you hear about this offer?
                </label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="question3"
                      value="tiktok"
                      checked={surveyData.question3 === 'tiktok'}
                      onChange={(e) => handleSurveyChange('question3', e.target.value)}
                      required
                    />
                    TikTok
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="question3"
                      value="instagram"
                      checked={surveyData.question3 === 'instagram'}
                      onChange={(e) => handleSurveyChange('question3', e.target.value)}
                    />
                    Instagram
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="question3"
                      value="friend"
                      checked={surveyData.question3 === 'friend'}
                      onChange={(e) => handleSurveyChange('question3', e.target.value)}
                    />
                    Friend/Family
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="question3"
                      value="other"
                      checked={surveyData.question3 === 'other'}
                      onChange={(e) => handleSurveyChange('question3', e.target.value)}
                    />
                    Other
                  </label>
                </div>
              </div>

              <button type="submit" className={styles.ctaButton}>
                Continue to Offers →
              </button>
            </form>
          </section>
        </main>
      )}

      {step === 3 && (
        <main className={styles.main}>
          <section className={styles.offersSection}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: '66%' }}></div>
            </div>
            <h2 className={styles.formTitle}>Step 3: Complete 3 Offers</h2>
            <p className={styles.stepDescription}>
              Choose and complete any 3 offers below. Most are free trials you can cancel anytime!
            </p>
            <p className={styles.offerCount}>
              {offersCompleted.length} of 3 offers completed
            </p>

            <form className={styles.form} onSubmit={handleSubmitOffers}>
              <div className={styles.offersList}>
                <div className={styles.offerCard}>
                  <div className={styles.offerHeader}>
                    <input
                      type="checkbox"
                      id="offer1"
                      checked={offersCompleted.includes(1)}
                      onChange={() => handleOfferToggle(1)}
                      className={styles.offerCheckbox}
                    />
                    <label htmlFor="offer1" className={styles.offerTitle}>
                      Premium Streaming Service - 30 Day Free Trial
                    </label>
                  </div>
                  <p className={styles.offerDescription}>
                    Unlimited movies and TV shows. Cancel anytime during trial.
                  </p>
                  <span className={styles.offerBadge}>Most Popular</span>
                </div>

                <div className={styles.offerCard}>
                  <div className={styles.offerHeader}>
                    <input
                      type="checkbox"
                      id="offer2"
                      checked={offersCompleted.includes(2)}
                      onChange={() => handleOfferToggle(2)}
                      className={styles.offerCheckbox}
                    />
                    <label htmlFor="offer2" className={styles.offerTitle}>
                      Music Streaming Premium - 3 Months Free
                    </label>
                  </div>
                  <p className={styles.offerDescription}>
                    Ad-free music, offline listening. No commitment required.
                  </p>
                  <span className={styles.offerBadge}>Best Value</span>
                </div>

                <div className={styles.offerCard}>
                  <div className={styles.offerHeader}>
                    <input
                      type="checkbox"
                      id="offer3"
                      checked={offersCompleted.includes(3)}
                      onChange={() => handleOfferToggle(3)}
                      className={styles.offerCheckbox}
                    />
                    <label htmlFor="offer3" className={styles.offerTitle}>
                      Fitness App Pro - 14 Day Free Trial
                    </label>
                  </div>
                  <p className={styles.offerDescription}>
                    Personalized workouts and meal plans. Cancel anytime.
                  </p>
                </div>

                <div className={styles.offerCard}>
                  <div className={styles.offerHeader}>
                    <input
                      type="checkbox"
                      id="offer4"
                      checked={offersCompleted.includes(4)}
                      onChange={() => handleOfferToggle(4)}
                      className={styles.offerCheckbox}
                    />
                    <label htmlFor="offer4" className={styles.offerTitle}>
                      Premium VPN Service - 30 Days Free
                    </label>
                  </div>
                  <p className={styles.offerDescription}>
                    Secure browsing, unlimited bandwidth. Risk-free trial.
                  </p>
                </div>

                <div className={styles.offerCard}>
                  <div className={styles.offerHeader}>
                    <input
                      type="checkbox"
                      id="offer5"
                      checked={offersCompleted.includes(5)}
                      onChange={() => handleOfferToggle(5)}
                      className={styles.offerCheckbox}
                    />
                    <label htmlFor="offer5" className={styles.offerTitle}>
                      Gaming Pass Ultimate - 1 Month Free
                    </label>
                  </div>
                  <p className={styles.offerDescription}>
                    100+ games, cloud gaming included. Cancel anytime.
                  </p>
                </div>

                <div className={styles.offerCard}>
                  <div className={styles.offerHeader}>
                    <input
                      type="checkbox"
                      id="offer6"
                      checked={offersCompleted.includes(6)}
                      onChange={() => handleOfferToggle(6)}
                      className={styles.offerCheckbox}
                    />
                    <label htmlFor="offer6" className={styles.offerTitle}>
                      Online Learning Platform - 7 Days Free
                    </label>
                  </div>
                  <p className={styles.offerDescription}>
                    Thousands of courses, expert instructors. No obligation.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className={styles.ctaButton}
                disabled={offersCompleted.length < 3}
              >
                {offersCompleted.length >= 3 ? 'Claim My $100 Gift Card →' : `Complete ${3 - offersCompleted.length} More Offers`}
              </button>
            </form>
          </section>
        </main>
      )}

      {step === 4 && (
        <main className={styles.main}>
          <section className={styles.successSection}>
            <div className={styles.successIcon}>🎉</div>
            <h1 className={styles.successTitle}>Congratulations!</h1>
            <p className={styles.successMessage}>
              Your $100 Crumbl Gift Card is on its way!
            </p>
            <div className={styles.successDetails}>
              <p>We've sent confirmation to:</p>
              <p className={styles.userEmail}>{formData.email}</p>
              <p className={styles.deliveryTime}>
                Expect delivery within 24-48 hours
              </p>
            </div>

            <div className={styles.giftCardPreview}>
              <div className={styles.giftCard}>
                <div className={styles.cardContent}>
                  <div className={styles.cardLogo}>Crumbl</div>
                  <div className={styles.cardAmount}>$100</div>
                  <div className={styles.cardText}>GIFT CARD</div>
                </div>
              </div>
            </div>

            <div className={styles.nextSteps}>
              <h3>What happens next?</h3>
              <ul className={styles.stepsList}>
                <li>✓ Check your email inbox (and spam folder)</li>
                <li>✓ You'll receive your digital gift card code</li>
                <li>✓ Use it at any Crumbl location or online</li>
                <li>✓ Don't forget to complete your offer trials!</li>
              </ul>
            </div>

            <div className={styles.socialShare}>
              <h3>Share with friends!</h3>
              <p>Help your friends get free cookies too!</p>
              <div className={styles.shareButtons}>
                <button className={styles.shareButton}>Share on TikTok</button>
                <button className={styles.shareButton}>Share on Instagram</button>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  )
}
