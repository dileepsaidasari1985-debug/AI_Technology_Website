import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  MessageSquare, 
  Video, 
  CheckCircle2, 
  Download, 
  Sparkles,
  Send
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Modal } from './common/Modal';
import { useToast } from './common/Toast';
import { sounds } from '../utils/soundEffects';

export const ScheduleChatModal = ({ isOpen, onClose }) => {
  const { personalInfo } = portfolioData;
  const { showToast } = useToast();

  const [meetingType, setMeetingType] = useState('interview'); // 'interview' | 'coffee' | 'collab'
  const [platform, setPlatform] = useState('Google Meet');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('2026-11-28');
  const [time, setTime] = useState('14:00');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  // Generate an iCalendar .ics file download
  const handleDownloadInvite = () => {
    sounds.playSuccess();
    const eventTitle = `${meetingType === 'interview' ? 'Technical Interview / Discussion' : 'Coffee Chat'} with ${personalInfo.fullName}`;
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Alex Rivera Student Portfolio//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:Meeting scheduled via Alex Rivera Portfolio website with ${name} (${email}). Platform: ${platform}. Notes: ${notes}`,
      `DTSTART:${date.replace(/-/g, '')}T${time.replace(':', '')}00Z`,
      `DTEND:${date.replace(/-/g, '')}T${time.replace(':', '')}00Z`,
      `LOCATION:${platform}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'meeting-invite.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Calendar invite (.ics) downloaded!', 'success');
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      showToast('Please provide your name and email address.', 'error');
      return;
    }

    sounds.playSuccess();
    setIsBooked(true);
    showToast('Meeting request submitted successfully!', 'success');
  };

  const handleReset = () => {
    setIsBooked(false);
    setName('');
    setEmail('');
    setNotes('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setIsBooked(false);
      }}
      title="Schedule a Chat / Meeting"
      maxWidth="max-w-2xl"
    >
      {!isBooked ? (
        <form onSubmit={handleBooking} className="space-y-5">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            I am always excited to connect with recruiters, engineering mentors, professors, and student peers. Pick a topic and time slot below:
          </p>

          {/* Meeting Type Radio Pills */}
          <div>
            <label className="block text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
              Meeting Purpose
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'interview', label: 'Internship / Interview', desc: 'Discuss SWE opportunities' },
                { id: 'coffee', label: 'Casual 30m Coffee Chat', desc: 'Tech advice & mentoring' },
                { id: 'collab', label: 'Project Collaboration', desc: 'Hackathon / Open source' }
              ].map((t) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => {
                    sounds.playClick();
                    setMeetingType(t.id);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    meetingType === t.id
                      ? 'border-cyan-400 bg-cyan-500/15 shadow-sm'
                      : 'border-white/5 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="text-xs font-bold text-white">{t.label}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{t.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Connor"
                className="w-full px-3.5 py-2 rounded-xl glass-card border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                Your Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. sarah@company.com"
                className="w-full px-3.5 py-2 rounded-xl glass-card border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Preferred Date, Time, and Platform */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-card border border-white/10 text-xs text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Time (PST)</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-card border border-white/10 text-xs text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Platform</label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-card border border-white/10 text-xs text-white focus:outline-none bg-navy-950"
              >
                <option value="Google Meet">Google Meet</option>
                <option value="Zoom">Zoom</option>
                <option value="Microsoft Teams">Microsoft Teams</option>
                <option value="Phone Call">Phone Call</option>
              </select>
            </div>
          </div>

          {/* Optional Notes */}
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">
              Short Note or Agenda (Optional)
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="What would you like to discuss or cover?"
              className="w-full px-3.5 py-2 rounded-xl glass-card border border-white/10 text-xs text-white focus:outline-none resize-none"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl glass-card text-xs font-semibold text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs sm:text-sm font-semibold shadow-lg hover:scale-105 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Confirm & Schedule</span>
            </button>
          </div>
        </form>
      ) : (
        /* Confirmation & Calendar Invite Screen */
        <div className="text-center py-6 space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30 shadow-lg">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h4 className="text-xl font-bold text-white">
            Chat Invitation Confirmed!
          </h4>

          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{name}</strong>! A calendar placeholder has been prepared for <strong className="text-cyan-400">{date} at {time} PST</strong> via <strong className="text-white">{platform}</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={handleDownloadInvite}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-md hover:scale-105 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download .ICS Calendar Event</span>
            </button>

            <button
              onClick={() => {
                onClose();
                handleReset();
              }}
              className="px-4 py-2.5 rounded-xl glass-card text-xs font-medium text-slate-300 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};

