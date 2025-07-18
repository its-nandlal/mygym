"use client";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiMail, FiMessageSquare, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { PiPersonArmsSpreadDuotone } from "react-icons/pi";
import { FaWpforms } from "react-icons/fa6";

export default function Section8() {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const message = watch('message', '');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch('https://formsubmit.co/your-email@example.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setFormStatus({ type: 'success', message: 'Message sent successfully!' });
        reset();
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full mt-12 md:p-8 rounded-2xl shadow-xl"
      >
        <div className="w-full py-10 md:pb-32 max-md:pb-16">
          <h1 className="max-md:text-[6.2vw] lg:text-[4.5vw] xl:text-[5vw] text-center font-['f2'] font-[900] leading-[1] uppercase tracking-wide max-md:scale-x-[1.5] max-md:scale-y-[1.6]">
            -Contact-
          </h1>
        </div>

        <div className='relative max-md:w-[100vw] md:w-[60%] md:mx-auto max-md:px-2'>
          <div className='absolute top-0 -left-[30%] z-[-1]'>
            <span className='block text-[12vw] opacity-[.2] animate-bounce -rotate-20'>
              <FaWpforms />
            </span>
          </div>
          <div className='absolute top-0 -right-[30%] z-[-1]'>
            <span className='block text-[12vw] opacity-[.2] animate-bounce rotate-20'>
              <FaWpforms />
            </span>
          </div>

          <AnimatePresence>
            {formStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
                  formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
                role="alert"
                aria-live="polite"
              >
                {formStatus.type === 'success' ? <FiCheckCircle size={20} /> : <FiAlertCircle size={20} />}
                <span>{formStatus.message}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <input type="hidden" name="_next" value="http://localhost:3000/thanks" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_autoresponse" value="Thank you for contacting us! We'll get back to you soon." />
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  {...register('name', { required: 'Name is required' })}
                  id="name"
                  type="text"
                  className="w-full text-gray-400 pl-10 p-3 border-b border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Your Name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <FiAlertCircle size={16} /> {errors.name.message}
                </p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                  id="email"
                  type="email"
                  className="w-full text-gray-400 pl-10 p-3 border-b border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Your Email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <FiAlertCircle size={16} /> {errors.email.message}
                </p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="membership" className="block text-sm font-medium text-gray-400 mb-1">Membership Plan</label>
              <div className="relative">
                <PiPersonArmsSpreadDuotone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  {...register('membership', { required: 'Please select a membership plan' })}
                  id="membership"
                  className="w-full pl-10 text-gray-400 p-3 border-b border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  aria-invalid={errors.membership ? 'true' : 'false'}
                >
                  <option value="" disabled selected>Select a plan</option>
                  <option value="Basic">Basic</option>
                  <option value="Premium">Premium</option>
                  <option value="Elite">Elite</option>
                </select>
              </div>
              {errors.membership && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <FiAlertCircle size={16} /> {errors.membership.message}
                </p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
              <div className="relative">
                <FiMessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                <textarea
                  {...register('message', { required: 'Message is required', maxLength: { value: 500, message: 'Message cannot exceed 500 characters' } })}
                  id="message"
                  rows="5"
                  className="w-full text-gray-400 pl-10 p-3 border-b border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                  placeholder="Your Message"
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
              </div>
              <div className="flex justify-between mt-1">
                {errors.message && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <FiAlertCircle size={16} /> {errors.message.message}
                  </p>
                )}
                <span className={`text-sm ${message.length > 500 ? 'text-red-500' : 'text-gray-400'}`}>
                  {message.length}/500
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                aria-label="Send Message"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={20} /> Send Message
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => reset()}
                className="flex-1 py-3 px-4 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                aria-label="Reset Form"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}