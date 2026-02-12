export default function ContactBackup() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-2xl mx-auto px-4 py-16">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        TEYLIOM EXPERIENCE
                    </h1>
                    <p className="text-xl text-gray-600">
                        Parlons de <span className="text-[#b91c2e] font-bold">votre projet</span>
                    </p>
                    <p className="text-gray-600 mt-4">
                        Remplissez ce formulaire et notre équipe vous contactera sous 24h
                    </p>
                </div>

                <form
                    action="https://formsubmit.co/diama.konte@teyliom.com"
                    method="POST"
                    className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-lg"
                >
                    {/* Configuration FormSubmit */}
                    <input type="hidden" name="_subject" value="🔥 Nouveau Lead Teyliom Experience" />
                    <input type="hidden" name="_template" value="box" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_cc" value="dkonte26@gmail.com" />
                    <input type="hidden" name="_next" value="https://teyliomexperience.vercel.app/merci" />

                    {/* Nom */}
                    <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                            NOM COMPLET *
                        </label>
                        <input
                            type="text"
                            id="nom"
                            name="Nom"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b91c2e] focus:border-transparent"
                            placeholder="Votre nom complet"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            EMAIL *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="Email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b91c2e] focus:border-transparent"
                            placeholder="votre@email.com"
                        />
                    </div>

                    {/* Téléphone */}
                    <div>
                        <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                            TÉLÉPHONE *
                        </label>
                        <input
                            type="tel"
                            id="telephone"
                            name="Téléphone"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b91c2e] focus:border-transparent"
                            placeholder="+221 XX XXX XX XX"
                        />
                    </div>

                    {/* Projet */}
                    <div>
                        <label htmlFor="projet" className="block text-sm font-medium text-gray-700 mb-2">
                            PROJET QUI VOUS INTÉRESSE *
                        </label>
                        <select
                            id="projet"
                            name="Projet"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b91c2e] focus:border-transparent"
                        >
                            <option value="">Sélectionnez un projet</option>
                            <option value="DIVINITY - Mamelles">DIVINITY — Mamelles</option>
                            <option value="LYNEA - Avenue Cheikh Anta Diop">LYNEA — Avenue Cheikh Anta Diop</option>
                            <option value="SHIRAMBA - Diamniadio">SHIRAMBA — Diamniadio</option>
                            <option value="CORALIE - Corniche Ouest">CORALIE — Corniche Ouest</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            MESSAGE (OPTIONNEL)
                        </label>
                        <textarea
                            id="message"
                            name="Message"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b91c2e] focus:border-transparent"
                            placeholder="Parlez-nous de votre projet..."
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#b91c2e] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#9a1625] transition-colors duration-200 text-lg"
                    >
                        Envoyer ma demande
                    </button>

                    <p className="text-sm text-gray-500 text-center mt-4">
                        En soumettant ce formulaire, vous acceptez que vos données soient traitées par Teyliom Properties pour répondre à votre demande.
                    </p>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-600">
                        <strong>Besoin d'aide ?</strong>
                    </p>
                    <p className="text-gray-600">
                        Notre équipe est disponible du lundi au vendredi de 9h à 18h
                    </p>
                    <p className="text-[#b91c2e] font-bold text-xl mt-2">
                        338296259
                    </p>
                </div>
            </div>
        </div>
    );
}
