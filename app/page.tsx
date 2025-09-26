export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#FE430B'}}>
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Trackable</h1>
              <p className="text-gray-600 dark:text-gray-300">Remote Workforce Management Solution</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-8 py-6" style={{backgroundColor: '#FE430B'}}>
            <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
            <p className="text-orange-100 mt-2">Last Updated: September 26, 2025</p>
          </div>

          <div className="px-8 py-8 space-y-8">
            {/* App Description */}
            <section className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About Trackable</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Trackable is a complete Remote Workforce Management Solution designed to maximize efficiency, productivity, and profitability within your organization. With its clean and intuitive interface, powerful analytics dashboard, and customizable features, Trackable helps you seamlessly manage your workforce from anywhere.
              </p>
              
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <span style={{color: '#FE430B'}}>📍</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Real-Time Location Tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={{color: '#FE430B'}}>📊</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Robust Analytics Dashboard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={{color: '#FE430B'}}>🎯</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Daily Activity Automation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={{color: '#FE430B'}}>⭐</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Performance Ratings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={{color: '#FE430B'}}>🎁</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Rewards & Incentives</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={{color: '#FE430B'}}>😊</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Satisfaction Tracking</span>
                </div>
              </div>
            </section>

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300">
                This Privacy Policy describes how Trackable ("we," "our," or "us") collects, uses, and protects your personal information when you use our mobile application ("the App"). By using the App, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2.1 Personal Information</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Account Information:</strong> Username, first name, last name, user ID</li>
                    <li>• <strong>Authentication Data:</strong> Login credentials, access tokens, and refresh tokens</li>
                    <li>• <strong>Profile Information:</strong> User type, department, role, and profile image</li>
                    <li>• <strong>Contact Information:</strong> Any contact details you provide</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2.2 Location Information</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Real-time Location:</strong> GPS coordinates for tracking purposes</li>
                    <li>• <strong>Background Location:</strong> Continuous location tracking when the app is running in the background</li>
                    <li>• <strong>Location History:</strong> Previous location data for journey and workflow tracking</li>
                    <li>• <strong>Address Information:</strong> Location addresses for component data and workflow purposes</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2.3 Device Information</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Device Identifiers:</strong> Unique device IDs, device model, and operating system version</li>
                    <li>• <strong>Battery Information:</strong> Battery status for optimizing background services</li>
                    <li>• <strong>Network Information:</strong> Connectivity status and network type</li>
                    <li>• <strong>App Usage Data:</strong> Features used, session duration, and interaction patterns</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2.4 File and Media Data</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Photos and Images:</strong> Pictures captured or selected through the app</li>
                    <li>• <strong>Videos:</strong> Video files uploaded or recorded within the app</li>
                    <li>• <strong>Documents:</strong> Files uploaded for workflow purposes</li>
                    <li>• <strong>Digital Signatures:</strong> Signature data captured within the app</li>
                    <li>• <strong>File Metadata:</strong> File names, sizes, types, and timestamps</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2.5 Workflow and Component Data</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Workflow Information:</strong> Workflow IDs, stages, and transitions</li>
                    <li>• <strong>Component Data:</strong> Text inputs, feedback, and form submissions</li>
                    <li>• <strong>Timestamps:</strong> Creation and modification dates for all data</li>
                    <li>• <strong>Sync Status:</strong> Information about data synchronization with servers</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. How We Use Your Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">3.1 Primary Purposes</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>• <strong>Service Delivery:</strong> Provide core app functionality and features</li>
                    <li>• <strong>Location Tracking:</strong> Track field activities and journey management</li>
                    <li>• <strong>Data Synchronization:</strong> Sync your data across devices and with servers</li>
                    <li>• <strong>Workflow Management:</strong> Manage and track workflow processes</li>
                    <li>• <strong>User Authentication:</strong> Verify your identity and secure your account</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">3.2 Secondary Purposes</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>• <strong>App Improvement:</strong> Analyze usage patterns to enhance user experience</li>
                    <li>• <strong>Technical Support:</strong> Diagnose and resolve technical issues</li>
                    <li>• <strong>Security:</strong> Detect and prevent fraudulent activities</li>
                    <li>• <strong>Notifications:</strong> Send relevant updates and alerts about your activities</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Sharing and Disclosure */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Sharing and Disclosure</h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">4.1 We Share Information With:</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Authorized Personnel:</strong> Team members and supervisors within your organization</li>
                    <li>• <strong>Service Providers:</strong> Third-party services that help us operate the app</li>
                    <li>• <strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">4.2 We Do Not:</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Sell your personal information to third parties</li>
                    <li>• Share your location data with unauthorized parties</li>
                    <li>• Use your data for advertising purposes</li>
                    <li>• Share your files or documents outside your organization without permission</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Third-Party Services</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">The App integrates with the following third-party services:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">5.1 Google Services</h3>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                    <li>• <strong>Google Maps:</strong> For location services and mapping functionality</li>
                    <li>• <strong>Firebase:</strong> For push notifications and messaging</li>
                    <li>• <strong>Google Play Services:</strong> For app functionality and updates</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">5.2 Other Services</h3>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                    <li>• <strong>API Servers:</strong> For data synchronization and backend services</li>
                    <li>• <strong>Cloud Storage:</strong> For file uploads and data backup</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Storage and Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Data Storage and Security</h2>
              
              <div className="space-y-4">
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">6.1 Local Storage</h3>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Data is stored locally on your device using encrypted databases</li>
                    <li>• Local files are protected by device-level security measures</li>
                    <li>• Temporary files are automatically cleaned up</li>
                  </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">6.2 Server Storage</h3>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Data transmitted to servers is encrypted in transit</li>
                    <li>• Server data is protected by industry-standard security measures</li>
                    <li>• Access to server data is restricted to authorized personnel only</li>
                  </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">6.3 Security Measures</h3>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Encryption:</strong> All sensitive data is encrypted both in transit and at rest</li>
                    <li>• <strong>Access Controls:</strong> Strict access controls and authentication mechanisms</li>
                    <li>• <strong>Regular Updates:</strong> Security patches and updates are applied regularly</li>
                    <li>• <strong>Monitoring:</strong> Continuous monitoring for security threats and vulnerabilities</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Data Retention</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>Active User Data:</strong> Retained while your account is active</li>
                <li>• <strong>Location History:</strong> Retained for business purposes as required by your organization</li>
                <li>• <strong>File Data:</strong> Retained according to your organization's data retention policies</li>
                <li>• <strong>Logs and Analytics:</strong> Retained for up to 2 years for security and improvement purposes</li>
                <li>• <strong>Deleted Data:</strong> Permanently removed from our systems within 30 days of deletion</li>
              </ul>
            </section>

            {/* Your Rights and Choices */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Your Rights and Choices</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">8.1 You Have the Right To:</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>• <strong>Access:</strong> Request a copy of your personal information</li>
                    <li>• <strong>Update:</strong> Correct or update your personal information</li>
                    <li>• <strong>Delete:</strong> Request deletion of your personal information</li>
                    <li>• <strong>Restrict:</strong> Limit how we use your personal information</li>
                    <li>• <strong>Export:</strong> Receive your data in a portable format</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">8.2 Location Settings:</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>• You can disable location services through your device settings</li>
                    <li>• Background location can be controlled through app permissions</li>
                    <li>• Note: Disabling location services may affect core app functionality</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">8.3 Notification Settings:</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>• Push notifications can be disabled through app settings</li>
                    <li>• Critical security notifications may still be sent</li>
                    <li>• Email notifications can be managed through your account settings</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                The App is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to remove such information.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. International Data Transfers</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place to protect your information.
              </p>
            </section>

            {/* Changes to This Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>• Posting the new Privacy Policy in the app</li>
                <li>• Sending you a notification</li>
                <li>• Updating the "Last Updated" date at the top of this policy</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Your continued use of the App after such modifications will constitute your acknowledgment of the modified Privacy Policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at:
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Company:</strong> Ceylon Business Appliances (Pvt) Ltd</p>
                <p><strong>Address:</strong> 193 Hill St, Dehiwala-Mount Lavinia 10350</p>
                <p><strong>Phone:</strong> +94117845200</p>
              </div>
            </section>

            {/* Legal Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Legal Compliance</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">This Privacy Policy complies with:</p>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>• General Data Protection Regulation (GDPR)</li>
                <li>• California Consumer Privacy Act (CCPA)</li>
                <li>• Google Play Store Developer Policy</li>
                <li>• Apple App Store Review Guidelines</li>
                <li>• Local data protection laws where applicable</li>
              </ul>
            </section>

            {/* Consent */}
            <section className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Consent</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">By using the Trackable app, you consent to:</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• The collection and use of your information as described in this Privacy Policy</li>
                <li>• The processing of your location data for app functionality</li>
                <li>• The storage and synchronization of your data as necessary for the service</li>
                <li>• The use of cookies and similar technologies for app operation</li>
              </ul>
            </section>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
              <p className="text-center text-gray-600 dark:text-gray-400 font-medium">
                This Privacy Policy is effective as of the date listed above and applies to all users of the Trackable mobile application.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#FE430B'}}>
              <span className="text-white font-bold">T</span>
            </div>
            <span className="text-xl font-bold">Trackable</span>
          </div>
          <p className="text-gray-400">© 2025 Trackable. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2">
            Empowering organizations with comprehensive workforce management solutions.
          </p>
        </div>
      </footer>
    </div>
  );
}
